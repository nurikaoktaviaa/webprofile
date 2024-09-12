'use client'; 
import React from 'react';

export const Header = () => { 
  return (
    <div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="flex justify-center items-center relative top-3 lg:top-6 xl:top-10">
        <nav className="flex gap-1 p-0.5 lg:gap-4 lg:p-2 xl:gap-6 xl:p-3 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#home" className="nav-item">Home</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

