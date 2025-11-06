import React, { useState } from 'react';
import { User, Settings, BookOpen, Award, Globe, Bell } from 'lucide-react';
import { useUser } from '../context/UserContext';

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    grade: user?.grade || '',
    learningStyle: user?.preferences?.learningStyle || 'visual',
    preferredLanguage: user?.preferences?.preferredLanguage || 'english',
    notifications: true,
    darkMode: false,
    offlineAccess: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user) {
      updateUser({
        ...user,
        name: formData.name,
        email: formData.email,
        grade: formData.grade,
        preferences: {
          ...user.preferences,
          learningStyle: formData.learningStyle,
          preferredLanguage: formData.preferredLanguage
        }
      });
    }
    
    // Show a success message or toast notification
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">User Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 bg-gray-50 p-6 border-r border-gray-100">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img 
                  src={user?.avatar || "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <button className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-1.5 shadow-md hover:bg-indigo-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{user?.name}</h2>
              <p className="text-gray-500">{user?.role === 'student' ? 'Student' : 'Teacher'}</p>
            </div>
            
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'profile' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                Profile Information
              </button>
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'preferences' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Learning Preferences
              </button>
              <button 
                onClick={() => setActiveTab('achievements')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'achievements' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Award className="mr-3 h-5 w-5" />
                Achievements
              </button>
            </nav>
          </div>
          
          {/* Main content */}
          <div className="flex-1 p-6">
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                      Grade/Class
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select Grade</option>
                      <option value="1st">1st Grade</option>
                      <option value="2nd">2nd Grade</option>
                      <option value="3rd">3rd Grade</option>
                      <option value="4th">4th Grade</option>
                      <option value="5th">5th Grade</option>
                      <option value="6th">6th Grade</option>
                      <option value="7th">7th Grade</option>
                      <option value="8th">8th Grade</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                    </select>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Account Security</h4>
                    <button type="button" className="text-indigo-600 font-medium hover:text-indigo-800 mr-4">
                      Change Password
                    </button>
                    <button type="button" className="text-indigo-600 font-medium hover:text-indigo-800">
                      Two-Factor Authentication
                    </button>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Preferences</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="learningStyle" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Learning Style
                    </label>
                    <select
                      id="learningStyle"
                      name="learningStyle"
                      value={formData.learningStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="visual">Visual</option>
                      <option value="auditory">Auditory</option>
                      <option value="reading">Reading/Writing</option>
                      <option value="kinesthetic">Kinesthetic</option>
                    </select>
                    <p className="mt-1 text-sm text-gray-500">
                      This helps us recommend content that matches how you learn best
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                      Content Language
                    </label>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-gray-400 mr-2" />
                      <select
                        id="preferredLanguage"
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="hindi">Hindi</option>
                        <option value="mandarin">Mandarin</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800 mb-2">Application Settings</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-700">Notifications</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="notifications"
                          checked={formData.notifications}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span className="text-gray-700">Dark Mode</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="darkMode"
                          checked={formData.darkMode}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        <span className="text-gray-700">Offline Access</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="offlineAccess"
                          checked={formData.offlineAccess}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save Preferences
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-yellow-100 rounded-lg p-4 flex items-center">
                    <div className="bg-yellow-100 rounded-full p-3 mr-3">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Early Bird</h4>
                      <p className="text-sm text-gray-600">Completed 5 lessons before 9 AM</p>
                      <div className="mt-1 text-xs font-medium text-yellow-700">+50 XP</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-lg p-4 flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-3">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Knowledge Seeker</h4>
                      <p className="text-sm text-gray-600">Completed 10 different subject areas</p>
                      <div className="mt-1 text-xs font-medium text-green-700">+100 XP</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4 flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Problem Solver</h4>
                      <p className="text-sm text-gray-600">Correctly answered 25 difficult questions</p>
                      <div className="mt-1 text-xs font-medium text-blue-700">+75 XP</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-lg p-4 flex items-center">
                    <div className="bg-purple-100 rounded-full p-3 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Data Master</h4>
                      <p className="text-sm text-gray-600">Completed advanced statistics course</p>
                      <div className="mt-1 text-xs font-medium text-purple-700">+120 XP</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Progress to Next Level</h4>
                  <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-600">Current: Level 7</span>
                    <span className="text-indigo-600 font-medium">1,450 / 2,000 XP</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;