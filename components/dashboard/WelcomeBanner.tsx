import React from 'react';

const WelcomeBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-brand-600 to-teal-500 rounded-3xl p-8 text-white relative overflow-hidden flex items-center shadow-lg shadow-brand-200">
      <div className="relative z-10 max-w-lg">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
          Welcome Back, Darrel 
          <span className="text-3xl animate-wave origin-bottom-right">👋</span>
        </h2>
        <p className="text-brand-100 text-sm leading-relaxed max-w-md">
          You've completed 85% your homework goal this month! Keep going to reach and improve even more.
        </p>
      </div>

      {/* Illustration */}
      <div className="absolute right-4 bottom-0 md:right-12 h-40 w-40 md:h-48 md:w-48">
        {/* Using a specific illustration style placeholder */}
        <img 
          src="https://img.freepik.com/free-vector/student-studying-with-laptop_23-2148615882.jpg?w=740&t=st=1708900000~exp=1708900600~hmac=xyz" 
          className="w-full h-full object-contain mix-blend-luminosity opacity-90 object-bottom transform translate-y-2"
          alt="Student studying"
          style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.2))' }}
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 blur-2xl"></div>
    </div>
  );
};

export default WelcomeBanner;