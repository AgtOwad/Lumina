import React from 'react';

export type PageType = 
  | 'dashboard' 
  | 'analytics' 
  | 'analytics-assignments'
  | 'analytics-export'
  | 'community' 
  | 'timetable' 
  | 'messages' 
  | 'events' 
  | 'support' 
  | 'settings';

export interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  id: PageType;
  hasSubmenu?: boolean;
  subItems?: string[];
}

export interface SidebarProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
}

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export interface Assignment {
  id: number;
  title: string;
  subtitle?: string;
  subject?: string;
  description?: string;
  status: 'completed' | 'pending' | 'late' | 'graded';
  grade?: string;
  dueDateColor?: string;
  date?: string;
  isCompleted: boolean;
}