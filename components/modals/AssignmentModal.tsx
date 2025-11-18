import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, FileText, Download, Upload } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { Assignment } from '../../types';

interface AssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  assignment: Assignment | null;
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({ isOpen, onClose, assignment }) => {
  if (!assignment) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'graded': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'late': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assignment Details">
      <div className="space-y-6">
        
        {/* Header Section */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wide mb-3 ${getStatusColor(assignment.status)}`}>
                {assignment.status === 'completed' || assignment.status === 'graded' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                {assignment.status}
              </span>
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">{assignment.title}</h2>
            </div>
            {assignment.grade && (
              <div className="text-center bg-brand-50 px-4 py-2 rounded-2xl">
                <p className="text-xs font-bold text-slate-500 uppercase">Grade</p>
                <p className="text-xl font-extrabold text-brand-600">{assignment.grade}</p>
              </div>
            )}
          </div>
          <p className="text-slate-500 font-medium">{assignment.subject || 'General Subject'} • {assignment.subtitle || 'Due Date'}</p>
        </div>

        <div className="h-px bg-gray-100"></div>

        {/* Description */}
        <div className="space-y-3">
           <h4 className="font-bold text-slate-800 flex items-center gap-2">
             <FileText className="w-4 h-4 text-brand-500" /> Description
           </h4>
           <p className="text-sm text-slate-600 leading-relaxed">
             {assignment.description || "Complete the exercises in chapter 4 covering the core concepts discussed in class. Make sure to show your work for all calculation problems and cite your sources for the essay portion."}
           </p>
        </div>

        {/* Resources */}
        <div className="space-y-3">
           <h4 className="font-bold text-slate-800 flex items-center gap-2">
             <Download className="w-4 h-4 text-brand-500" /> Resources
           </h4>
           <div className="flex flex-col gap-2">
             <div className="p-3 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold text-[10px]">PDF</div>
                 <div className="text-sm font-bold text-slate-700 group-hover:text-brand-600">Chapter_4_Guide.pdf</div>
               </div>
               <Download className="w-4 h-4 text-slate-400" />
             </div>
             <div className="p-3 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 font-bold text-[10px]">DOC</div>
                 <div className="text-sm font-bold text-slate-700 group-hover:text-brand-600">Worksheet_Template.docx</div>
               </div>
               <Download className="w-4 h-4 text-slate-400" />
             </div>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex gap-3">
          {assignment.status !== 'completed' && assignment.status !== 'graded' ? (
             <Button fullWidth icon={<Upload className="w-4 h-4" />}>Submit Assignment</Button>
          ) : (
             <Button fullWidth variant="outline" icon={<Download className="w-4 h-4" />}>Download Submission</Button>
          )}
        </div>

      </div>
    </Modal>
  );
};

export default AssignmentModal;