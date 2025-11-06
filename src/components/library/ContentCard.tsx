import React from 'react';
import { Clock, Video, FileText, BookOpen, Globe } from 'lucide-react';
import { ContentItem } from '../../types/content';

interface ContentCardProps {
  content: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const getIcon = () => {
    switch(content.type) {
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'quiz':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeStyles = () => {
    switch(content.type) {
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

  const getDifficultyStyles = () => {
    switch(content.difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-amber-100 text-amber-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
      <div className="relative">
        <img 
          src={content.thumbnail} 
          alt={content.title} 
          className="w-full h-40 object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-start p-4">
          <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            Start Learning
          </button>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTypeStyles()}`}>
            {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getDifficultyStyles()}`}>
            {content.difficulty.charAt(0).toUpperCase() + content.difficulty.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-gray-900 font-medium mb-1 group-hover:text-indigo-600 transition-colors">
          {content.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {content.description}
        </p>
        
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{content.duration}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-3.5 w-3.5 mr-1" />
            <span>{content.language.charAt(0).toUpperCase() + content.language.slice(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;