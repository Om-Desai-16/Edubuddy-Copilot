import React from 'react';
import { Video, FileText, BookOpen } from 'lucide-react';

const activities = [
  { 
    id: 1, 
    type: 'quiz',
    title: 'Algebra Quiz',
    description: 'Completed with score 85%',
    time: '2 hours ago',
    score: 85
  },
  { 
    id: 2, 
    type: 'video',
    title: 'Introduction to Chemistry',
    description: 'Watched 15 minutes',
    time: '5 hours ago'
  },
  { 
    id: 3, 
    type: 'article',
    title: 'The French Revolution',
    description: 'Read 8 minutes',
    time: '1 day ago'
  },
];

const RecentActivity = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'video':
        return <Video className="h-5 w-5 text-white" />;
      case 'article':
        return <FileText className="h-5 w-5 text-white" />;
      case 'quiz':
        return <BookOpen className="h-5 w-5 text-white" />;
      default:
        return <FileText className="h-5 w-5 text-white" />;
    }
  };

  const getIconBackground = (type: string) => {
    switch(type) {
      case 'video':
        return 'bg-indigo-600';
      case 'article':
        return 'bg-purple-600';
      case 'quiz':
        return 'bg-green-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <div key={activity.id} className="relative flex items-start">
          <div className="relative">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getIconBackground(activity.type)}`}>
              {getIcon(activity.type)}
            </div>
            {activity.id !== activities.length && (
              <div className="absolute top-8 left-4 -ml-px h-full w-0.5 bg-gray-200"></div>
            )}
          </div>
          <div className="min-w-0 flex-1 ml-4">
            <div className="text-sm font-medium text-gray-900">
              {activity.title}
            </div>
            <div className="mt-1 text-sm text-gray-500 flex items-center">
              {activity.description}
              {activity.score && (
                <span className={`ml-2 font-medium ${getScoreColor(activity.score)}`}>
                  {activity.score}%
                </span>
              )}
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {activity.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;