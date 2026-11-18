import { useEffect, useRef } from 'react';

/** Frame sequence: F1 Background for F1 Site_1_chf3_prob4_000001.jpg … _000753.jpg */
export const SCROLL_FRAME_COUNT = 753;

const frameFileName = (index: number) =>
  `F1 Background for F1 Site_1_chf3_prob4_${String(index).padStart(6, '0')}.jpg`;

export const scrollFrameSrc = (index: number) =>
  `/f1-animation/${encodeURIComponent(frameFileName(index))}`;

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = width / height;
  let dw: number;
  let dh: number;
  let dx: number;
  let dy: number;

  if (ir > cr) {
    dh = height;
    dw = height * ir;
    dx = (width - dw) / 2;
    dy = 0;
  } else {
    dw = width;
    dh = width / ir;
    dx = 0;
    dy = (height - dh) / 2;
  }

  ctx.drawImage(img, dx, dy, dw, dh);
}

export function useScrollFrameBackground(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const framesRef = useRef<(HTMLImageElement | undefined)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frames = framesRef.current;
    frames.length = SCROLL_FRAME_COUNT;

    let disposed = false;
    let scrollFraction = 0;
    let canvasCssWidth = 0;
    let canvasCssHeight = 0;

    const syncCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasCssWidth = window.innerWidth;
      canvasCssHeight = window.innerHeight;
      canvas.width = Math.floor(canvasCssWidth * dpr);
      canvas.height = Math.floor(canvasCssHeight * dpr);
      canvas.style.width = `${canvasCssWidth}px`;
      canvas.style.height = `${canvasCssHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getScrollFraction = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return 0;
      return Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };

    const paint = () => {
      const maxIndex = SCROLL_FRAME_COUNT - 1;
      const frameFloat = scrollFraction * maxIndex;
      const indexA = Math.floor(frameFloat);
      const indexB = Math.min(indexA + 1, maxIndex);
      const blend = frameFloat - indexA;

      const imgA = frames[indexA];
      if (!imgA?.complete || imgA.naturalWidth === 0) return;

      ctx.clearRect(0, 0, canvasCssWidth, canvasCssHeight);

      const imgB = frames[indexB];
      if (blend < 0.02 || indexA === indexB || !imgB?.complete || imgB.naturalWidth === 0) {
        drawCover(ctx, imgA, canvasCssWidth, canvasCssHeight);
        return;
      }

      ctx.globalAlpha = 1 - blend;
      drawCover(ctx, imgA, canvasCssWidth, canvasCssHeight);
      ctx.globalAlpha = blend;
      drawCover(ctx, imgB, canvasCssWidth, canvasCssHeight);
      ctx.globalAlpha = 1;
    };

    const schedulePaint = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        scrollFraction = getScrollFraction();
        paint();
      });
    };

    const loadFrame = (i: number) =>
      new Promise<void>((resolve) => {
        if (disposed) {
          resolve();
          return;
        }
        const img = new Image();
        frames[i] = img;
        img.decoding = 'async';
        img.onload = () => {
          if (i === 0) schedulePaint();
          resolve();
        };
        img.onerror = () => resolve();
        img.src = scrollFrameSrc(i + 1);
      });

    const preload = async () => {
      await loadFrame(0);
      const batchSize = 24;
      for (let start = 1; start < SCROLL_FRAME_COUNT; start += batchSize) {
        if (disposed) break;
        const end = Math.min(start + batchSize, SCROLL_FRAME_COUNT);
        await Promise.all(
          Array.from({ length: end - start }, (_, j) => loadFrame(start + j)),
        );
      }
    };

    syncCanvasSize();
    void preload();

    const onResize = () => {
      syncCanvasSize();
      schedulePaint();
    };

    window.addEventListener('scroll', schedulePaint, { passive: true });
    window.addEventListener('resize', onResize);

    schedulePaint();

    return () => {
      disposed = true;
      window.removeEventListener('scroll', schedulePaint);
      window.removeEventListener('resize', onResize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [canvasRef]);
}
