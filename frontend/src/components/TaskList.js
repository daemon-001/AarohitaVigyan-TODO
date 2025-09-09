import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Dropdown from './Dropdown';
import './TaskList.css';

const TaskList = ({ tasks, loading, onToggleTask }) => {
  const [priorityFilter, setPriorityFilter] = useState('all');
  
  // Ensure tasks is always an array
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const filterOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'high', label: 'High Priority', badge: { type: 'high' } },
    { value: 'medium', label: 'Medium Priority', badge: { type: 'medium' } },
    { value: 'low', label: 'Low Priority', badge: { type: 'low' } }
  ];

  if (loading) {
    return (
      <div className="task-list">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading tasks...</p>
        </div>
      </div>
    );
  }

  if (safeTasks.length === 0) {
    return (
      <div className="task-list">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks yet</h3>
          <p>Add your first task above to get started!</p>
        </div>
      </div>
    );
  }

  // Filter tasks by priority
  const filteredTasks = priorityFilter === 'all' 
    ? safeTasks 
    : safeTasks.filter(task => task.priority === priorityFilter);

  const completedTasks = filteredTasks.filter(task => task.is_done);
  const pendingTasks = filteredTasks.filter(task => !task.is_done);

  return (
    <div className="task-list">
      <div className="filter-section">
        <div className="filter-controls">
          <label htmlFor="priority-filter" className="filter-label">
            Filter by Priority:
          </label>
          <Dropdown
            id="priority-filter"
            value={priorityFilter}
            onChange={setPriorityFilter}
            options={filterOptions}
            className="filter-dropdown"
            placeholder="Select filter..."
          />
        </div>
      </div>

      {pendingTasks.length > 0 && (
        <div className="task-section">
          <h3 className="section-title">
            Pending Tasks ({pendingTasks.length})
          </h3>
            {pendingTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                animationDelay={index * 0.1}
              />
            ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3 className="section-title completed">
            Completed Tasks ({completedTasks.length})
          </h3>
            {completedTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                animationDelay={(pendingTasks.length + index) * 0.1}
              />
            ))}
        </div>
      )}

      {filteredTasks.length === 0 && priorityFilter !== 'all' && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No tasks found</h3>
          <p>No tasks match the selected priority filter.</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;




