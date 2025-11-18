import React, { useState } from 'react';
import { MoreVertical, Check } from 'lucide-react';
import Card from '../ui/Card';
import AssignmentModal from '../modals/AssignmentModal';
import { Assignment } from '../../types';

const completedTasks: Assignment[] = [
  {
    id: 101,
    title: "Renaissne Painting Assignment",
    subtitle: "History • Completed on Aug 5",
    status: 'completed',
    isCompleted: true,
    subject: 'Art History',
    description: 'Analyze the key techniques used in Renaissance art, focusing on perspective and light. Submit a 500-word essay.'
  },
  {
    id: 102,
    title: "Math Test Preparation",
    subtitle: "Mathematics • Completed on Aug 3",
    status: 'completed',
    isCompleted: true,
    subject: 'Mathematics',
    description: 'Complete the practice test for the upcoming mid-term exam. Focus on quadratic equations and calculus basics.'
  },
  {
    id: 103,
    title: "Poetry Analysis Essay",
    subtitle: "Literature • Graded 92/100",
    status: 'graded',
    isCompleted: true,
    grade: '92/100',
    subject: 'Literature',
    description: 'Write a comparative analysis of two poems by Robert Frost. Discuss themes of nature and isolation.'
  }
];

const pendingTasks: Assignment[] = [
  {
    id: 201,
    title: "Chemistry Quiz Table",
    subtitle: "Due tomorrow",
    dueDateColor: "text-red-500",
    status: 'pending',
    isCompleted: false,
    subject: 'Chemistry',
    description: 'Memorize the periodic table elements 1-50. There will be a pop quiz covering atomic weights and symbols.'
  },
  {
    id: 202,
    title: "Impressionist Art",
    subtitle: "Due in 2 days",
    dueDateColor: "text-orange-500",
    status: 'pending',
    isCompleted: false,
    subject: 'Art History',
    description: 'Research the origins of Impressionism. Prepare a 5-minute presentation on Monet or Renoir.'
  },
  {
    id: 203,
    title: "Ancient Civilizations Essay",
    subtitle: "Due Aug 10",
    dueDateColor: "text-slate-400",
    status: 'pending',
    isCompleted: false,
    subject: 'History',
    description: 'Draft an outline for your final essay on Ancient Civilizations. Choose between Mesopotamia, Egypt, or Indus Valley.'
  }
];

const Assignments: React.FC = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssignmentClick = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl text-slate-800">Assignments</h3>
          <button className="p-2 hover:bg-gray-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {/* Completed */}
          {completedTasks.map((task, i) => (
            <div 
              key={task.id} 
              onClick={() => handleAssignmentClick(task)}
              className="flex items-start gap-3 group cursor-pointer animate-enter" 
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-brand-600 transition-colors line-through decoration-slate-300 group-hover:decoration-brand-300">{task.title}</span>
            </div>
          ))}

          {/* Pending */}
          {pendingTasks.map((task, i) => (
            <div 
              key={task.id} 
              onClick={() => handleAssignmentClick(task)}
              className="flex items-start gap-3 group cursor-pointer animate-enter" 
              style={{ animationDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="mt-0.5 w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-brand-500 transition-colors flex-shrink-0 group-hover:scale-110 duration-200"></div>
              <div>
                <p className="text-sm font-medium text-slate-700 group-hover:text-brand-600 transition-colors">{task.title}</p>
                <p className={`text-xs mt-0.5 font-medium ${task.dueDateColor}`}>{task.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-50">
           <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse-soft">
              <Check className="w-3 h-3" />
              <span>3/6 Complete</span>
           </div>
        </div>
      </Card>

      <AssignmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        assignment={selectedAssignment} 
      />
    </>
  );
};

export default Assignments;