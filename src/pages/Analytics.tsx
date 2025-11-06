import React, { useState } from 'react';
import { Calendar, Clock, TrendingUp, BarChart2 } from 'lucide-react';
import { useUser } from '../context/UserContext';

// This would normally use a charting library like Chart.js or Recharts
const PerformanceChart = () => {
  return (
    <div className="h-64 w-full flex items-end space-x-2">
      <div className="bg-indigo-100 hover:bg-indigo-200 transition-colors duration-300 w-1/7 h-20 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Mon: 65%
        </div>
      </div>
      <div className="bg-indigo-200 hover:bg-indigo-300 transition-colors duration-300 w-1/7 h-28 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Tue: 70%
        </div>
      </div>
      <div className="bg-indigo-300 hover:bg-indigo-400 transition-colors duration-300 w-1/7 h-32 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Wed: 75%
        </div>
      </div>
      <div className="bg-indigo-400 hover:bg-indigo-500 transition-colors duration-300 w-1/7 h-48 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Thu: 85%
        </div>
      </div>
      <div className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 w-1/7 h-40 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Fri: 80%
        </div>
      </div>
      <div className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 w-1/7 h-36 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Sat: 78%
        </div>
      </div>
      <div className="bg-indigo-700 hover:bg-indigo-800 transition-colors duration-300 w-1/7 h-24 rounded-t-md relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Sun: 68%
        </div>
      </div>
    </div>
  );
};

const TimeDistributionChart = () => {
  return (
    <div className="relative h-64 w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-8 border-gray-100 flex items-center justify-center text-gray-500 text-sm">
          Total: 14.5 hrs
        </div>
      </div>
      
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle r="40" cx="50" cy="50" fill="transparent" stroke="#f3f4f6" strokeWidth="20" />
        
        {/* Mathematics - 30% */}
        <circle 
          r="40" 
          cx="50" 
          cy="50" 
          fill="transparent" 
          stroke="#3b82f6" 
          strokeWidth="20" 
          strokeDasharray={`${30 * 2.512} ${100 * 2.512}`} 
          strokeDashoffset="0" 
        />
        
        {/* Science - 25% */}
        <circle 
          r="40" 
          cx="50" 
          cy="50" 
          fill="transparent" 
          stroke="#8b5cf6" 
          strokeWidth="20" 
          strokeDasharray={`${25 * 2.512} ${100 * 2.512}`} 
          strokeDashoffset={`${-30 * 2.512}`}
        />
        
        {/* English - 20% */}
        <circle 
          r="40" 
          cx="50" 
          cy="50" 
          fill="transparent" 
          stroke="#ec4899" 
          strokeWidth="20" 
          strokeDasharray={`${20 * 2.512} ${100 * 2.512}`} 
          strokeDashoffset={`${-(30 + 25) * 2.512}`}
        />
        
        {/* Others - 25% */}
        <circle 
          r="40" 
          cx="50" 
          cy="50" 
          fill="transparent" 
          stroke="#10b981" 
          strokeWidth="20" 
          strokeDasharray={`${25 * 2.512} ${100 * 2.512}`} 
          strokeDashoffset={`${-(30 + 25 + 20) * 2.512}`}
        />
      </svg>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
          <span>Math</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
          <span>Science</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-pink-500 rounded-full mr-1"></div>
          <span>English</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
          <span>Others</span>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const { user } = useUser();
  const [period, setPeriod] = useState('week');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Learning Analytics</h1>
        <p className="text-gray-600">Track your progress and optimize your learning strategy</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => setPeriod('week')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            period === 'week'
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            period === 'month'
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          This Month
        </button>
        <button
          onClick={() => setPeriod('quarter')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            period === 'quarter'
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          This Quarter
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            period === 'year'
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          This Year
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Performance Trend</h2>
              <p className="text-gray-500 text-sm">Average quiz scores over time</p>
            </div>
            <div className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium">
              +12% from last {period}
            </div>
          </div>
          <PerformanceChart />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Time Distribution</h2>
              <p className="text-gray-500 text-sm">How you're spending your study time</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>14.5 hrs total</span>
            </div>
          </div>
          <TimeDistributionChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Strengths</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-800">Algebra</span>
              </div>
              <span className="font-medium text-green-600">95%</span>
            </li>
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-800">Reading Comprehension</span>
              </div>
              <span className="font-medium text-green-600">92%</span>
            </li>
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-800">World History</span>
              </div>
              <span className="font-medium text-green-600">89%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Areas to Improve</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-800">Chemistry</span>
              </div>
              <span className="font-medium text-red-600">62%</span>
            </li>
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-800">Geometry</span>
              </div>
              <span className="font-medium text-red-600">65%</span>
            </li>
            <li className="flex justify-between items-center pb-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-gray-800">Grammar</span>
              </div>
              <span className="font-medium text-amber-600">72%</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recommendations</h2>
          <ul className="space-y-4">
            <li className="pb-3 border-b border-gray-100">
              <div className="flex items-center mb-1">
                <BarChart2 className="h-4 w-4 text-indigo-600 mr-2" />
                <h3 className="font-medium text-gray-800">Focus on Chemistry</h3>
              </div>
              <p className="text-sm text-gray-600">
                We've added interactive tutorials to help you with chemical equations.
              </p>
            </li>
            <li className="pb-3 border-b border-gray-100">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 text-indigo-600 mr-2" />
                <h3 className="font-medium text-gray-800">Consistent Schedule</h3>
              </div>
              <p className="text-sm text-gray-600">
                Try studying for shorter periods more frequently throughout the week.
              </p>
            </li>
            <li>
              <div className="flex items-center mb-1">
                <TrendingUp className="h-4 w-4 text-indigo-600 mr-2" />
                <h3 className="font-medium text-gray-800">Try Practice Tests</h3>
              </div>
              <p className="text-sm text-gray-600">
                Take more practice quizzes in Geometry to improve retention.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Quizzes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quiz
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Algebra: Equations</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">May 12, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">18/20</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">15 minutes</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Chemistry: Elements</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">May 10, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">12/20</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">22 minutes</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Needs Improvement
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">History: World War II</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">May 8, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">17/20</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">18 minutes</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Very Good
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;