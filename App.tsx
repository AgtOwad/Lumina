import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';

// Pages
import Analytics from './components/pages/Analytics';
import Community from './components/pages/Community';
import Timetable from './components/pages/Timetable';
import Messages from './components/pages/Messages';
import Events from './components/pages/Events';
import Settings from './components/pages/Settings';
import Support from './components/pages/Support';

import { PageType } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('dashboard');

  const renderContent = () => {
    // Key property ensures React remounts the component triggering the CSS animation
    // For analytics sub-pages, we keep the same key prefix so it doesn't fully unmount if we want smooth transition,
    // or we can change key to force re-animation. Here we force re-animation for distinct feel.
    
    let content;
    switch (activePage) {
      case 'dashboard':
        content = <Dashboard />;
        break;
      case 'analytics': 
        content = <Analytics view="overview" />;
        break;
      case 'analytics-assignments': 
        content = <Analytics view="assignments" />;
        break;
      case 'analytics-export': 
        content = <Analytics view="export" />;
        break;
      case 'community': content = <Community />; break;
      case 'timetable': content = <Timetable />; break;
      case 'messages': content = <Messages />; break;
      case 'events': content = <Events />; break;
      case 'settings': content = <Settings />; break;
      case 'support': content = <Support />; break;
      default: content = <Dashboard />;
    }

    return (
      <div key={activePage} className="animate-enter">
        {content}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#F6F9F8] font-sans">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Header />
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-0 scroll-smooth">
          <div className="h-full">
            {renderContent()}
          </div>
          
          {/* Bottom Spacing */}
          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
};

export default App;