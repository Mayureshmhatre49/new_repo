import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="h-16 bg-neutral-surface/80 dark:bg-[#1a2634]/90 backdrop-blur-md border-b border-neutral-border dark:border-slate-700 flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <span className="material-icons-outlined">menu</span>
        </button>
        <h1 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
          <span className="material-icons-outlined text-slate-400 text-[18px]">search</span>
          <input
            className="bg-transparent border-none text-sm ml-2 w-full focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-400 p-0"
            placeholder="Search projects, KPIs..."
            type="text"
          />
        </div>
        <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-full transition-colors">
          <span className="material-icons-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2634]"></span>
        </button>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
        <button className="text-sm font-medium text-slate-600 hover:text-primary flex items-center gap-1">
          <span>Q3 2023</span>
          <span className="material-icons-outlined text-[16px]">keyboard_arrow_down</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
