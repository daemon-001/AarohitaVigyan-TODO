import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, loading, onToggleTask }) => {
  // Ensure tasks is always an array
  const safeTasks = Array.isArray(tasks) ? tasks : [];

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

  const completedTasks = safeTasks.filter(task => task.is_done);
  const pendingTasks = safeTasks.filter(task => !task.is_done);

  return (
    <div className="task-list">
      {pendingTasks.length > 0 && (
        <div className="task-section">
          <h3 className="section-title">
            Pending Tasks ({pendingTasks.length})
          </h3>
          {pendingTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
            />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3 className="section-title completed">
            Completed Tasks ({completedTasks.length})
          </h3>
          {completedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;




