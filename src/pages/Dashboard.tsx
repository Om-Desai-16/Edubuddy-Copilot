import React, { useState } from 'react';
import { BookOpen, Video, FileText, Activity, Star, Clock } from 'lucide-react';
import RecommendedContent from '../components/dashboard/RecommendedContent';
import LearningProgress from '../components/dashboard/LearningProgress';
import RecentActivity from '../components/dashboard/RecentActivity';
import AchievementCard from '../components/dashboard/AchievementCard';
import VoiceAssistant from '../components/VoiceAssistant';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);

  const achievements = [
    { id: 1, title: 'First Login', icon: <Star size={20} />, xp: 10 },
    { id: 2, title: 'Complete 3 Lessons', icon: <BookOpen size={20} />, xp: 30 },
    { id: 3, title: 'Perfect Score', icon: <Activity size={20} />, xp: 50 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user?.name || 'Student'}!</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey</p>
        </div>
        <button 
          onClick={() => setShowVoiceAssistant(!showVoiceAssistant)}
          className="mt-4 md:mt-0 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full flex items-center font-medium hover:bg-indigo-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
          Voice Assistant
        </button>
      </div>

      {showVoiceAssistant && <VoiceAssistant onClose={() => setShowVoiceAssistant(false)} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Study Time Today</p>
            <p className="text-2xl font-bold text-gray-800">1h 23m</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <BookOpen className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Lessons Completed</p>
            <p className="text-2xl font-bold text-gray-800">12 / 25</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Star className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total XP Points</p>
            <p className="text-2xl font-bold text-gray-800">1,450</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recommended for You</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</button>
            </div>
            <RecommendedContent />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</button>
            </div>
            <RecentActivity />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h2>
            <LearningProgress />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>
            <div className="space-y-3">
              {achievements.map(achievement => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;