import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const { isDark } = useTheme();
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">TODO Manager</h1>
        <p className="header-subtitle">Task Management System</p>
        <div className="header-theme-info">
          <div className="theme-bubble">
            <span className="theme-text">
              {isDark ? 'Dark for comfort' : 'Bright for focus'}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;




