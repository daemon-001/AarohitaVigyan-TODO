import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="theme-icon">
            {isDark ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
