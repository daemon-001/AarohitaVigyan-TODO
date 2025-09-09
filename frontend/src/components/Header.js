import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import './Header.css';

// Inspirational subtitle variations - moved outside component to prevent re-creation
const inspirationalSubtitles = [
  "📝 Organize Your Day, One Task at a Time",
  "🎯 Stay Focused, Stay Productive, Stay Ahead",
  "🚀 Plan Smarter, Work Faster, Achieve More",
  "✅ Turn Big Goals into Small, Achievable Steps",
  "⏳ Manage Your Time, Master Your Day",
  "✨ Your Personal Space for Productivity and Clarity",
  "📌 Write It Down, Check It Off, Feel Accomplished",
  "📅 Stay on Track, Every Day, Every Task",
  "🔖 Keep Your Priorities Clear and Your Mind Free",
  "🌟 One List, Endless Possibilities for Progress"
];

const Header = () => {
  const { isDark } = useTheme();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentSubtitle = inspirationalSubtitles[currentIndex];
    let charIndex = 0;
    let timeoutId;
    let nextQuoteTimeoutId;
    let isActive = true;
    
    setDisplayText('');
    setIsTyping(true);
    
    const typeNextChar = () => {
      if (!isActive) return;
      
      if (charIndex < currentSubtitle.length) {
        setDisplayText(currentSubtitle.slice(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeNextChar, 80);
      } else {
        setIsTyping(false);
        nextQuoteTimeoutId = setTimeout(() => {
          if (isActive) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirationalSubtitles.length);
          }
        }, 3000);
      }
    };
    
    // Start typing after a brief delay
    timeoutId = setTimeout(typeNextChar, 100);
    
    return () => {
      isActive = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (nextQuoteTimeoutId) clearTimeout(nextQuoteTimeoutId);
    };
  }, [currentIndex]);
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Things to Do</h1>
        <p className={`header-subtitle typing ${isTyping ? 'typing-active' : ''}`}>
          {displayText}
          <span className="cursor"></span>
        </p>
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




