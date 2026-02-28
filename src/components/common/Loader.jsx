import React from 'react';

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-spin" />
        <div className="absolute inset-1 bg-white rounded-full" />
      </div>
      {text && (
        <p className="text-gray-600 font-medium text-sm">{text}</p>
      )}
    </div>
  );
};

export default Loader;