import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggle, animationDelay = 0 }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div 
      className={`task-item ${task.is_done ? 'completed' : ''} priority-${task.priority}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="task-content">
        <button
          className={`task-checkbox ${task.is_done ? 'checked' : ''}`}
          onClick={handleToggle}
          aria-label={task.is_done ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.is_done && <span className="checkmark">✓</span>}
        </button>
        
        <div className="task-details">
          <div className="task-header">
            <h4 className="task-title">{task.title}</h4>
                 <div className="priority-display">
                   <span className={`priority-indicator priority-${task.priority}`}></span>
                   <span className="priority-text">
                     {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                   </span>
                 </div>
          </div>
          <p className="task-meta">
            Created: {formatDate(task.created_at)}
            {task.updated_at !== task.created_at && (
              <span> • Updated: {formatDate(task.updated_at)}</span>
            )}
          </p>
        </div>
      </div>
      
      <div className="task-status">
        <span className={`status-badge ${task.is_done ? 'completed' : 'pending'}`}>
          {task.is_done ? 'Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;




