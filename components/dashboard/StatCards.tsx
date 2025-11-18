import React from 'react';
import { ClipboardList, BookOpen, FileText, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCardItem 
        title="Tasks completed" 
        value="20/25" 
        icon={<ClipboardList className="w-6 h-6 text-white" />} 
        iconBg="bg-brand-600"
        delay="0ms"
      />
      <StatCardItem 
        title="Pending homework" 
        value="42/46" 
        icon={<BookOpen className="w-6 h-6 text-white" />} 
        iconBg="bg-orange-500"
        delay="100ms"
      />
      <StatCardItem 
        title="Pending assignments" 
        value="24/28" 
        icon={<FileText className="w-6 h-6 text-white" />} 
        iconBg="bg-emerald-500"
        delay="200ms"
      />
    </div>
  );
};

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  delay: string;
}

const StatCardItem: React.FC<CardProps> = ({ title, value, icon, iconBg, delay }) => (
  <Card className="h-36 relative overflow-hidden group hover:-translate-y-1 cursor-pointer transition-transform duration-300 border-transparent hover:border-brand-100" style={{ animationDelay: delay }}>
    <div className="flex justify-between items-start z-10 relative">
      <div className={`p-3.5 rounded-2xl ${iconBg} shadow-lg shadow-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-slate-800 tracking-tight">{value}</div>
        <div className="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wide opacity-70">{title}</div>
      </div>
    </div>
    
    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-brand-600 transition-colors z-10">
      <span>View details</span>
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
    </div>

    {/* Decorational Circle */}
    <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gray-50 rounded-full z-0 opacity-50 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
  </Card>
);

export default StatCards;