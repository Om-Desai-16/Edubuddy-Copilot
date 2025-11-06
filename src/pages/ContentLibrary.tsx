import React, { useState } from 'react';
import { Search, Filter, BookOpen, Video, FileText, Globe } from 'lucide-react';
import ContentCard from '../components/library/ContentCard';
import { useContent } from '../context/ContentContext';

const ContentLibrary = () => {
  const { content } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const contentTypes = [
    { id: 'all', label: 'All Types', icon: <Filter size={18} /> },
    { id: 'video', label: 'Videos', icon: <Video size={18} /> },
    { id: 'article', label: 'Articles', icon: <FileText size={18} /> },
    { id: 'quiz', label: 'Quizzes', icon: <BookOpen size={18} /> },
  ];

  const topics = [
    { id: 'all', label: 'All Topics' },
    { id: 'math', label: 'Mathematics' },
    { id: 'science', label: 'Science' },
    { id: 'english', label: 'English' },
    { id: 'history', label: 'History' },
    { id: 'programming', label: 'Programming' },
  ];

  const languages = [
    { id: 'all', label: 'All Languages' },
    { id: 'english', label: 'English' },
    { id: 'spanish', label: 'Spanish' },
    { id: 'french', label: 'French' },
    { id: 'hindi', label: 'Hindi' },
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesTopic = selectedTopic === 'all' || item.category === selectedTopic;
    const matchesLanguage = selectedLanguage === 'all' || item.language === selectedLanguage;
    
    return matchesSearch && matchesType && matchesTopic && matchesLanguage;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Content Library</h1>
        <p className="text-gray-600">Discover personalized learning materials curated just for you</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search for content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {topics.map(topic => (
                <option key={topic.id} value={topic.id}>{topic.label}</option>
              ))}
            </select>
            
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {languages.map(language => (
                <option key={language.id} value={language.id}>{language.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {contentTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium ${
                selectedType === type.id
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <span className="mr-1.5">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.length > 0 ? (
          filteredContent.map(item => (
            <ContentCard key={item.id} content={item} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No content found</h3>
            <p className="text-gray-600 max-w-md">
              We couldn't find any content matching your current filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentLibrary;