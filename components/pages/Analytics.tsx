import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Clock, ArrowUpRight, Download, Calendar, Filter, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Assignment } from '../../types';

interface AnalyticsProps {
  view?: 'overview' | 'assignments' | 'export';
}

const attendanceData = [
  { name: 'Mon', value: 92 },
  { name: 'Tue', value: 95 },
  { name: 'Wed', value: 88 },
  { name: 'Thu', value: 94 },
  { name: 'Fri', value: 90 },
  { name: 'Sat', value: 0 },
  { name: 'Sun', value: 0 },
];

const subjectPerformance = [
  { subject: 'Math', score: 85, color: '#059669' },
  { subject: 'Science', score: 92, color: '#10b981' },
  { subject: 'English', score: 78, color: '#f59e0b' },
  { subject: 'History', score: 88, color: '#8b5cf6' },
  { subject: 'Art', score: 95, color: '#ec4899' },
];

const detailedAssignments: Assignment[] = [
  { id: 1, title: 'Linear Algebra Quiz', subject: 'Math', date: 'Aug 20, 2024', status: 'graded', grade: '92/100', isCompleted: true },
  { id: 2, title: 'World War II Essay', subject: 'History', date: 'Aug 18, 2024', status: 'graded', grade: '88/100', isCompleted: true },
  { id: 3, title: 'Chemical Reactions Lab', subject: 'Science', date: 'Aug 25, 2024', status: 'pending', isCompleted: false },
  { id: 4, title: 'Shakespeare Analysis', subject: 'English', date: 'Aug 22, 2024', status: 'late', isCompleted: false },
  { id: 5, title: 'Modern Art Project', subject: 'Art', date: 'Aug 28, 2024', status: 'pending', isCompleted: false },
  { id: 6, title: 'Physics Motion Test', subject: 'Science', date: 'Aug 15, 2024', status: 'graded', grade: '95/100', isCompleted: true },
];

const Analytics: React.FC<AnalyticsProps> = ({ view = 'overview' }) => {

  if (view === 'assignments') {
    return (
      <div className="flex flex-col gap-6 h-full animate-enter">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Assignments Performance</h2>
            <p className="text-slate-500 text-sm mt-1">Detailed breakdown of your recent tasks</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filter</Button>
            <Button icon={<Download className="w-4 h-4" />}>Download CSV</Button>
          </div>
        </div>

        <Card className="flex-1 overflow-hidden" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Assignment Name</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Due Date</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {detailedAssignments.map((item, i) => (
                  <tr key={item.id} className="hover:bg-brand-50/30 transition-colors group animate-enter" style={{ animationDelay: `${i * 50}ms` }}>
                    <td className="p-5 font-bold text-slate-700">{item.title}</td>
                    <td className="p-5 text-sm font-medium text-slate-600">{item.subject}</td>
                    <td className="p-5 text-sm font-medium text-slate-500">{item.date}</td>
                    <td className="p-5">
                      <span className={`
                        inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase
                        ${item.status === 'graded' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : ''}
                        ${item.status === 'pending' ? 'bg-blue-50 text-blue-600 border-blue-100' : ''}
                        ${item.status === 'late' ? 'bg-red-50 text-red-600 border-red-100' : ''}
                      `}>
                        {item.status === 'graded' && <CheckCircle className="w-3 h-3" />}
                        {item.status === 'pending' && <Clock className="w-3 h-3" />}
                        {item.status === 'late' && <AlertCircle className="w-3 h-3" />}
                        {item.status}
                      </span>
                    </td>
                    <td className="p-5 text-right font-bold text-slate-800">{item.grade || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  }

  if (view === 'export') {
    return (
      <div className="max-w-3xl mx-auto flex flex-col gap-6 h-full animate-enter">
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold text-slate-800">Export Data</h2>
          <p className="text-slate-500 text-sm mt-1">Download your performance reports and academic records</p>
        </div>

        <Card className="p-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-6">
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Date Range</label>
                 <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="Start Date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-brand-500 outline-none" />
                    </div>
                    <div className="relative flex-1">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="End Date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-brand-500 outline-none" />
                    </div>
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">File Format</label>
                 <div className="grid grid-cols-2 gap-3">
                   <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-500 hover:bg-brand-50 transition-all">
                     <input type="radio" name="format" className="text-brand-600 focus:ring-brand-500" defaultChecked />
                     <span className="text-sm font-bold text-slate-700">PDF Document</span>
                   </label>
                   <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-500 hover:bg-brand-50 transition-all">
                     <input type="radio" name="format" className="text-brand-600 focus:ring-brand-500" />
                     <span className="text-sm font-bold text-slate-700">Excel (CSV)</span>
                   </label>
                 </div>
               </div>
             </div>

             <div className="space-y-4">
               <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Include Data</label>
               <div className="space-y-3">
                  {['Grade Summary', 'Attendance Records', 'Assignment Details', 'Behavior Reports'].map((item) => (
                    <label key={item} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded text-brand-600 focus:ring-brand-500 border-gray-300" defaultChecked />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </label>
                  ))}
               </div>
             </div>
           </div>

           <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-4">
             <Button variant="ghost">Cancel</Button>
             <Button icon={<Download className="w-4 h-4" />}>Generate Report</Button>
           </div>
        </Card>
      </div>
    );
  }

  // Overview View (Default)
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center justify-between animate-enter">
        <h2 className="text-2xl font-bold text-slate-800">Analytics Overview</h2>
        <Button 
            variant="outline" 
            icon={<Download className="w-4 h-4" />}
        >
            Export Summary
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard 
          title="Average Grade" 
          value="88.2%" 
          trend="+2.4%" 
          icon={<TrendingUp className="w-6 h-6 text-white" />} 
          color="bg-brand-500"
          delay="0ms" 
        />
        <KpiCard 
          title="Attendance Rate" 
          value="94.5%" 
          trend="+0.8%" 
          icon={<Users className="w-6 h-6 text-white" />} 
          color="bg-emerald-500" 
          delay="100ms"
        />
        <KpiCard 
          title="Study Hours" 
          value="32.4h" 
          trend="-1.2h" 
          isNegative
          icon={<Clock className="w-6 h-6 text-white" />} 
          color="bg-teal-500" 
          delay="200ms"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0 animate-enter delay-300">
        {/* Attendance Chart */}
        <Card className="flex flex-col h-full">
          <h3 className="font-bold text-xl text-slate-800 mb-6">Weekly Attendance</h3>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" animationDuration={2000} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Subject Performance */}
        <Card className="flex flex-col overflow-y-auto">
          <h3 className="font-bold text-xl text-slate-800 mb-6">Subject Performance</h3>
          <div className="space-y-6">
            {subjectPerformance.map((sub, i) => (
              <div key={sub.subject} className="animate-enter" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-700">{sub.subject}</span>
                  <span className="font-bold text-slate-800">{sub.score}%</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${sub.score}%`, backgroundColor: sub.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, trend, icon, color, isNegative, delay }: any) => (
  <Card className="flex items-center justify-between relative overflow-hidden group hover:-translate-y-1" style={{ animationDelay: delay }}>
    <div className="z-10">
      <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      <div className={`flex items-center gap-1 text-xs font-bold mt-2 ${isNegative ? 'text-red-500' : 'text-emerald-500'}`}>
        <ArrowUpRight className={`w-3 h-3 ${isNegative ? 'rotate-90' : ''}`} />
        {trend} <span className="text-slate-400 font-medium ml-1">vs last month</span>
      </div>
    </div>
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shadow-lg shadow-brand-100 z-10 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    
    {/* Background Decor */}
    <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${color}`}></div>
  </Card>
);

export default Analytics;