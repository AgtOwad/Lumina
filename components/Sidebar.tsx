import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  Users, 
  Calendar, 
  MessageCircle, 
  Clock, 
  HelpCircle, 
  Settings, 
  ChevronDown
} from 'lucide-react';
import { SidebarProps, PageType } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
  ];

  const otherItems = [
    { id: 'community', label: 'Community', icon: <Users /> },
    { id: 'timetable', label: 'Timetable', icon: <Calendar /> },
    { id: 'messages', label: 'Messages', icon: <MessageCircle /> },
    { id: 'events', label: 'Events', icon: <Clock /> },
  ];

  const bottomItems = [
    { id: 'support', label: 'Support', icon: <HelpCircle /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> },
  ];

  const MenuItem: React.FC<{ item: { id: string, label: string, icon?: React.ReactNode }, isSub?: boolean }> = ({ item, isSub = false }) => {
    const isActive = activePage === item.id;
    return (
      <button 
        onClick={() => onNavigate(item.id as PageType)}
        className={`
          w-full px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-300 ease-out relative overflow-hidden group
          ${isActive 
            ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 translate-x-1' 
            : 'text-slate-500 hover:bg-brand-50 hover:text-brand-600'
          }
          ${isSub ? 'pl-12 py-2 text-sm' : ''}
        `}
      >
        {!isSub && item.icon && (
          <div className={`relative z-10 w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
          </div>
        )}
        <span className={`relative z-10 font-medium ${isActive ? '' : ''}`}>{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="w-64 h-full bg-white flex flex-col border-r border-gray-100 py-6 px-4 hidden md:flex shrink-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8 cursor-pointer group" onClick={() => onNavigate('dashboard')}>
        <div className="relative w-10 h-10 bg-brand-600 rounded-xl shadow-lg shadow-brand-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
           {/* Custom Icon SVG */}
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white relative z-10">
             <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-700 to-transparent opacity-50"></div>
        </div>
        <span className="text-2xl font-extrabold text-slate-800 tracking-tight">Lumina</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar pr-1">
        
        {/* Dashboard */}
        <MenuItem item={{ id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> }} />

        {/* Analytics Group */}
        <div className="mt-1">
          <div 
            onClick={() => setIsAnalyticsOpen(!isAnalyticsOpen)}
            className={`w-full px-4 py-3 text-slate-500 hover:bg-brand-50 hover:text-brand-600 rounded-xl flex items-center justify-between cursor-pointer group transition-colors duration-200 ${activePage.startsWith('analytics') ? 'bg-brand-50 text-brand-600' : ''}`}
          >
            <div className="flex items-center gap-3">
              <PieChart className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110`} />
              <span className="font-medium">Analytics</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAnalyticsOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {/* Submenu */}
          <div className={`space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${isAnalyticsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div onClick={() => onNavigate('analytics')} className={`pl-12 py-2 cursor-pointer text-sm font-medium hover:text-brand-600 rounded-lg transition-colors ${activePage === 'analytics' ? 'text-brand-600 bg-brand-50/50' : 'text-slate-400'}`}>Overview</div>
            <div onClick={() => onNavigate('analytics-assignments')} className={`pl-12 py-2 cursor-pointer text-sm font-medium hover:text-brand-600 rounded-lg transition-colors ${activePage === 'analytics-assignments' ? 'text-brand-600 bg-brand-50/50' : 'text-slate-400'}`}>Assignments</div>
            <div onClick={() => onNavigate('analytics-export')} className={`pl-12 py-2 cursor-pointer text-sm font-medium hover:text-brand-600 rounded-lg transition-colors ${activePage === 'analytics-export' ? 'text-brand-600 bg-brand-50/50' : 'text-slate-400'}`}>Export Data</div>
          </div>
        </div>

        {/* Other Menu Items */}
        {otherItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto pt-6 space-y-1 border-t border-gray-50">
        {bottomItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;