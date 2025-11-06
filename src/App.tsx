import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ContentLibrary from './pages/ContentLibrary';
import UserProfile from './pages/UserProfile';
import Analytics from './pages/Analytics';
import AppLayout from './layouts/AppLayout';
import { UserProvider } from './context/UserContext';
import { ContentProvider } from './context/ContentContext';
import './index.css';

function App() {
  return (
    <UserProvider>
      <ContentProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="library" element={<ContentLibrary />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </Router>
      </ContentProvider>
    </UserProvider>
  );
}

export default App;