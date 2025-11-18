import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 62 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 58 },
  { name: 'Jun', value: 85, active: true },
  { name: 'Jul', value: 50 },
  { name: 'Aug', value: 42 },
  { name: 'Sep', value: 20 },
  { name: 'Oct', value: 65 },
  { name: 'Nov', value: 70 },
  { name: 'Dec', value: 45 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl -mt-12 animate-scale-in">
        <p className="font-semibold">Complete: {payload[0].value}%</p>
        {/* Little triangle pointer */}
        <div className="w-2 h-2 bg-slate-800 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
      </div>
    );
  }
  return null;
};

const CompletionChart: React.FC = () => {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-xl text-slate-800">Homework Completion Rates</h3>
        <Button 
            variant="outline" 
            size="sm" 
            className="text-xs font-semibold"
            icon={<ChevronDown className="w-3 h-3" />}
        >
            Monthly
        </Button>
      </div>

      <div className="flex-1 w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }} barSize={24}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 500 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 500 }} 
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip 
              cursor={{ fill: '#f1f5f9', radius: 4 }} 
              content={<CustomTooltip />}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.active ? '#059669' : '#f1f5f9'} 
                  className={`transition-all duration-300 ${entry.active ? 'hover:fill-brand-700' : 'hover:fill-slate-300'}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CompletionChart;