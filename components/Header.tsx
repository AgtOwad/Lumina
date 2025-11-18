import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-20 px-8 flex items-center justify-between bg-transparent mb-2">
      {/* Search */}
      <div className="relative w-96 hidden md:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="w-full bg-white pl-12 pr-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 shadow-sm text-slate-600"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer pl-2">
          <img 
            src="https://picsum.photos/id/64/100/100" 
            alt="Darrel Stew" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="hidden lg:block text-left">
            <p className="text-sm font-bold text-slate-800 leading-none">Darrel Stew</p>
            <p className="text-xs text-slate-400 mt-1">@stew_darrel</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 hidden lg:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;