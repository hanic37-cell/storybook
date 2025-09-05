
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="w-16 h-16 border-8 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-lg font-semibold text-green-700">그림을 그리고 있어요...</p>
    </div>
  );
};

export default LoadingSpinner;
