import React from 'react';
import WelcomeBanner from '../dashboard/WelcomeBanner';
import StatCards from '../dashboard/StatCards';
import TopPerformers from '../dashboard/TopPerformers';
import CompletionChart from '../dashboard/CompletionChart';
import Assignments from '../dashboard/Assignments';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Left Column (Wide) */}
      <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
        <div className="animate-enter">
          <WelcomeBanner />
        </div>
        <div className="animate-enter delay-100">
          <StatCards />
        </div>
        <div className="h-[400px] animate-enter delay-200">
          <CompletionChart />
        </div>
      </div>

      {/* Right Column (Narrow) */}
      <div className="flex flex-col gap-6 lg:gap-8">
         <div className="animate-enter delay-100">
           <TopPerformers />
         </div>
         <div className="flex-1 min-h-[350px] animate-enter delay-200">
          <Assignments />
         </div>
      </div>
    </div>
  );
};

export default Dashboard;