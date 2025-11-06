import React from 'react';

const subjects = [
  { id: 1, name: 'Mathematics', progress: 78, color: 'bg-blue-500' },
  { id: 2, name: 'Science', progress: 65, color: 'bg-purple-500' },
  { id: 3, name: 'English', progress: 92, color: 'bg-green-500' },
  { id: 4, name: 'History', progress: 45, color: 'bg-amber-500' },
];

const LearningProgress = () => {
  return (
    <div className="space-y-4">
      {subjects.map((subject) => (
        <div key={subject.id}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{subject.name}</span>
            <span className="text-sm font-medium text-gray-700">{subject.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className={`${subject.color} h-2.5 rounded-full transition-all duration-500 ease-out`} 
              style={{ width: `${subject.progress}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-sm font-medium text-gray-700">Overall Progress</h4>
            <p className="text-xs text-gray-500">Based on completed modules</p>
          </div>
          <div className="text-xl font-bold text-indigo-600">72%</div>
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;