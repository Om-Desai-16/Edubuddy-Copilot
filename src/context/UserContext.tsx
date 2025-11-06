import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/user';

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // In a real app, we would store the user data in localStorage or a secure cookie
  };

  const logout = () => {
    setUser(null);
    // In a real app, we would clear the user data from localStorage or cookies
  };

  const updateUser = (userData: User) => {
    setUser(userData);
    // In a real app, we would update the user data in the backend
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};