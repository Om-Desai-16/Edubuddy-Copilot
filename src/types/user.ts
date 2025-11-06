export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  grade?: string;
  avatar?: string;
  preferences: {
    learningStyle: 'visual' | 'auditory' | 'reading' | 'kinesthetic';
    preferredLanguage: string;
    [key: string]: any;
  };
  [key: string]: any;
}