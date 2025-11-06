import React from 'react';
import { Video, FileText, BookOpen } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const RecommendedContent = () => {
  const { content } = useContent();
  
  // In a real app, these would be filtered based on the user's preferences and learning history
  const recommendedItems = content.slice(0, 3);

  const getIcon = (type: string) => {
    switch(type) {
      case 'video':
        return <Video className="h-5 w-5 text-indigo-600" />;
      case 'article':
        return <FileText className="h-5 w-5 text-purple-600" />;
      case 'quiz':
        return <BookOpen className="h-5 w-5 text-green-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeText = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeStyles = (type: string) => {
    switch(type) {
      case 'video':
        return 'bg-indigo-100 text-indigo-800';
      case 'article':
        return 'bg-purple-100 text-purple-800';
      case 'quiz':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {recommendedItems.map((item) => (
        <div key={item.id} className="flex items-start space-x-4 group cursor-pointer">
          <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${
            item.type === 'video' 
              ? 'bg-indigo-100' 
              : item.type === 'article'
                ? 'bg-purple-100'
                : 'bg-green-100'
          }`}>
            {getIcon(item.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
              {item.title}
            </p>
            <div className="flex items-center mt-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeStyles(item.type)}`}>
                {getTypeText(item.type)}
              </span>
              <span className="ml-2 text-xs text-gray-500">{item.duration}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedContent;