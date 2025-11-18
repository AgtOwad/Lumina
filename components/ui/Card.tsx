import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  // className and onClick are already included in HTMLAttributes
  noPadding?: boolean;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  noPadding = false, 
  hoverEffect = false,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-3xl shadow-sm border border-slate-100/50 
        transition-all duration-300 ease-out
        ${noPadding ? '' : 'p-6'}
        ${hoverEffect ? 'hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;