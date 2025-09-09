import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "Select option...", 
  disabled = false,
  className = "",
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div 
      className={`dropdown ${className} ${disabled ? 'disabled' : ''} ${isOpen ? 'open' : ''}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="dropdown-trigger"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={id ? `${id}-label` : undefined}
        id={id}
      >
        <span className="dropdown-value">
          {selectedOption && selectedOption.badge ? (
            <>
              <span className={`priority-indicator priority-${selectedOption.badge.type}`}></span>
              {selectedOption.label}
            </>
          ) : (
            selectedOption ? selectedOption.label : placeholder
          )}
        </span>
        <svg 
          className="dropdown-arrow" 
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <button
              key={option.value || index}
              type="button"
              className={`dropdown-option ${option.value === value ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.badge && (
                <span className={`priority-indicator priority-${option.badge.type}`}></span>
              )}
              <span className="option-label">{option.label}</span>
              {option.value === value && (
                <svg 
                  className="option-check" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M13.5 4.5L6 12L2.5 8.5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
