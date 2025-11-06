import React from 'react';

interface Achievement {
  id: number;
  title: string;
  icon: React.ReactNode;
  xp: number;
}

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
        {achievement.icon}
      </div>
      <div className="ml-3 flex-1">
        <div className="text-sm font-medium text-gray-900">{achievement.title}</div>
        <div className="text-xs text-indigo-600">+{achievement.xp} XP</div>
      </div>
    </div>
  );
};

export default AchievementCard;