export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'quiz';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  thumbnail: string;
  language: string;
  [key: string]: any;
}