import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContentItem } from '../types/content';

interface ContentContextType {
  content: ContentItem[];
  addContent: (content: ContentItem) => void;
  updateContent: (id: string, content: Partial<ContentItem>) => void;
  removeContent: (id: string) => void;
}

const initialContent: ContentItem[] = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    description: 'Learn the basics of algebraic expressions and equations in this comprehensive introduction.',
    type: 'video',
    category: 'math',
    difficulty: 'beginner',
    duration: '15 min',
    thumbnail: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '2',
    title: 'Chemical Reactions Explained',
    description: 'Understand the different types of chemical reactions and how they work in this interactive lesson.',
    type: 'article',
    category: 'science',
    difficulty: 'intermediate',
    duration: '10 min',
    thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '3',
    title: 'World War II Quiz',
    description: 'Test your knowledge of World War II with this comprehensive quiz covering key events and figures.',
    type: 'quiz',
    category: 'history',
    difficulty: 'advanced',
    duration: '20 min',
    thumbnail: 'https://images.pexels.com/photos/6147134/pexels-photo-6147134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '4',
    title: 'Grammar Fundamentals',
    description: 'Master the basics of English grammar with this comprehensive guide to parts of speech and sentence structure.',
    type: 'article',
    category: 'english',
    difficulty: 'beginner',
    duration: '12 min',
    thumbnail: 'https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '5',
    title: 'Introduction to Python',
    description: 'Get started with Python programming in this beginner-friendly tutorial covering basic syntax and concepts.',
    type: 'video',
    category: 'programming',
    difficulty: 'beginner',
    duration: '25 min',
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '6',
    title: 'Geometry: Understanding Angles',
    description: 'Learn about different types of angles and their properties in this interactive geometry lesson.',
    type: 'video',
    category: 'math',
    difficulty: 'intermediate',
    duration: '18 min',
    thumbnail: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '7',
    title: 'Photosynthesis Explained',
    description: 'Understand the process of photosynthesis and its importance for life on Earth in this detailed article.',
    type: 'article',
    category: 'science',
    difficulty: 'intermediate',
    duration: '15 min',
    thumbnail: 'https://images.pexels.com/photos/3735864/pexels-photo-3735864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  },
  {
    id: '8',
    title: 'Spanish Vocabulary Basics',
    description: 'Learn essential Spanish vocabulary for beginners with this interactive lesson featuring audio pronunciations.',
    type: 'quiz',
    category: 'language',
    difficulty: 'beginner',
    duration: '10 min',
    thumbnail: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'spanish'
  },
  {
    id: '9',
    title: 'Creative Writing Techniques',
    description: 'Discover powerful creative writing techniques to enhance your storytelling abilities and engage readers.',
    type: 'video',
    category: 'english',
    difficulty: 'intermediate',
    duration: '22 min',
    thumbnail: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    language: 'english'
  }
];

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentItem[]>(initialContent);

  const addContent = (newContent: ContentItem) => {
    setContent(prev => [...prev, newContent]);
  };

  const updateContent = (id: string, updatedContent: Partial<ContentItem>) => {
    setContent(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updatedContent } : item
      )
    );
  };

  const removeContent = (id: string) => {
    setContent(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ContentContext.Provider value={{ content, addContent, updateContent, removeContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};