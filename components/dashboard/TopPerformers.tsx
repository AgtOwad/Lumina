import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MoreVertical } from 'lucide-react';
import Card from '../ui/Card';

const data = [
  { name: 'Progress', value: 51.2, color: '#059669' }, // Brand Green
  { name: 'Status', value: 18.3, color: '#fb923c' },   // Orange
  { name: 'Summary', value: 30.5, color: '#14b8a6' },  // Teal
];

const TopPerformers: React.FC = () => {
  return (
    <Card className="h-80 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-xl text-slate-800">Top Performers</h3>
        <button className="p-2 hover:bg-gray-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={85}
              paddingAngle={5}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="outline-none focus:outline-none"
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              itemStyle={{ fontSize: '12px', fontWeight: 600 }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none animate-scale-in">
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Total</span>
          <span className="text-2xl font-extrabold text-slate-800">100%</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center mt-2 px-4">
        {data.map((item, i) => (
          <div key={item.name} className="flex flex-col items-center animate-enter" style={{ animationDelay: `${i * 100}ms` }}>
             <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.name}</span>
             </div>
             <span className="text-sm font-bold text-slate-800">{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopPerformers;