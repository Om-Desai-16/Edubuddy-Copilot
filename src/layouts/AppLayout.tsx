import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, User, BarChart2, Bell, Menu, X, LogOut, HelpCircle, Zap, Moon, Sun } from 'lucide-react';
import { useUser } from '../context/UserContext';

const AppLayout = () => {
  const { user, logout } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New course recommended for you', time: '2 hours ago', read: false },
    { id: 2, message: 'You completed Algebra module', time: '1 day ago', read: true },
    { id: 3, message: 'Quiz reminder: Science', time: '2 days ago', read: true },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we would apply dark mode classes to the body or a main container
  };

  const unreadNotificationsCount = notifications.filter(notification => !notification.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const mainNavItems = [
    { path: '/', icon: <Home className="h-6 w-6" />, label: 'Dashboard' },
    { path: '/library', icon: <BookOpen className="h-6 w-6" />, label: 'Content Library' },
    { path: '/analytics', icon: <BarChart2 className="h-6 w-6" />, label: 'Analytics' },
    { path: '/profile', icon: <User className="h-6 w-6" />, label: 'Profile' },
  ];

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      {/* Top navigation bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden -ml-1 mr-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Zap className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LearnSmart</span>
              </div>
            </div>
            
            <div className="flex items-center">
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              {/* Notifications */}
              <div className="relative ml-3">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none relative"
                >
                  <Bell className="h-6 w-6" />
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                        {unreadNotificationsCount > 0 && (
                          <button 
                            onClick={markAllAsRead}
                            className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                          >
                            Mark all as read
                          </button>
                        )}
                      </div>
                      <div className="max-h-72 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-3 text-sm text-gray-500 text-center">
                            No notifications
                          </div>
                        ) : (
                          notifications.map(notification => (
                            <div 
                              key={notification.id}
                              className={`px-4 py-2 hover:bg-gray-50 ${!notification.read ? 'bg-indigo-50' : ''}`}
                            >
                              <div className="flex justify-between">
                                <p className={`text-sm ${!notification.read ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                  {notification.message}
                                </p>
                                {!notification.read && <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="border-t border-gray-100 px-4 py-2">
                        <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <div className="flex flex-col items-end mr-3">
                    <span className="text-sm font-medium text-gray-900">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.role === 'student' ? 'Student' : 'Teacher'}</span>
                  </div>
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Help */}
              <button className="ml-4 p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <HelpCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </div>
              </Link>
            ))}
            <button
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <LogOut className="h-6 w-6" />
              <span className="ml-3">Sign Out</span>
            </button>
          </div>
        </div>
      )}
      
      <div className="flex flex-1">
        {/* Sidebar navigation */}
        <aside className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-white">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="mt-5 px-2 space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md ${
                      location.pathname === item.path
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `flex-shrink-0 mr-3 h-6 w-6 ${
                        location.pathname === item.path
                          ? 'text-indigo-600'
                          : 'text-gray-500 group-hover:text-gray-600'
                      }`
                    })}
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto border-t border-gray-200 px-3 py-4">
                <button
                  onClick={logout}
                  className="w-full flex items-center px-2 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="mr-3 h-5 w-5 text-red-500" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;