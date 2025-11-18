import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      {label && <span className="text-slate-700 font-bold text-sm group-hover:text-brand-600 transition-colors">{label}</span>}
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)} 
        />
        <div className={`block w-12 h-7 rounded-full transition-colors duration-300 ease-in-out ${checked ? 'bg-brand-500' : 'bg-slate-200'}`}></div>
        <div className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 ease-in-out shadow-sm ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </div>
    </label>
  );
};

export default Switch;