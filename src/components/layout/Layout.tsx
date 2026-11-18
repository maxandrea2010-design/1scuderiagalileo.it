import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-white relative bg-[#050b16]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.12),_transparent_50%)]">
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[120px] animate-drift" />
        <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[110px] animate-float-slow" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
