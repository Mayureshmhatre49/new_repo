import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/' },
    { name: 'Projects', icon: 'folder_open', path: '/projects' },
    { name: 'Procurement', icon: 'shopping_cart', path: '/procurement' },
    { name: 'Finance', icon: 'account_balance_wallet', path: '/finance' },
  ];

  const analyticItems = [
    { name: 'Reports', icon: 'analytics', path: '/reports' },
    { name: 'Risk Analysis', icon: 'warning_amber', path: '/risk' },
  ];

  return (
    <aside className="w-64 bg-neutral-surface dark:bg-[#1a2634] border-r border-neutral-border dark:border-slate-700 hidden md:flex flex-col h-full shrink-0 transition-all duration-300">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-neutral-border dark:border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">H</div>
          <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white">HSI Smart Exec™</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors group ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              {item.icon}
            </span>
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}

        <div className="pt-6 pb-2 px-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Analytics</p>
        </div>

        {analyticItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors group ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <span className="material-icons-outlined text-[20px] group-hover:text-primary transition-colors">
              {item.icon}
            </span>
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-neutral-border dark:border-slate-700">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <img
            alt="User Profile"
            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-600"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQrSXEUSVgsj3q24XC3k3tiN9D2EVT7gk_oc6ZAi5-wiG6k4ot534IVsSSj1YLkGqKK3NmvafSicmr1Lo7tUxDEe_3qFxiX6Svoqw9Dw2NHNjmjcjudBJ5VR_D5WSsaVKivBP0V4SqxnGM45c1K6p40VojCt540wyrGESd3VypGvDPVEJKGlAhxFWOXLK-R15s8Rnhgn9NUEY57vWUr1TFvM6UnSwQ136C7I4wekXkxDGJzK5ukmSmBvfMdbqm-YxzYapdEcUAqHG"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-500 truncate">VP of Operations</p>
          </div>
          <span className="material-icons-outlined text-slate-400 text-sm">expand_more</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
