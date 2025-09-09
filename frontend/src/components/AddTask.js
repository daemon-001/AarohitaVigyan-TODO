import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './AddTask.css';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorityOptions = [
    { value: 'low', label: 'Low Priority', badge: { type: 'low' } },
    { value: 'medium', label: 'Medium Priority', badge: { type: 'medium' } },
    { value: 'high', label: 'High Priority', badge: { type: 'high' } }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onAddTask(title.trim(), priority);
      setTitle('');
      setPriority('medium');
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
            disabled={isSubmitting}
          />
          <Dropdown
            value={priority}
            onChange={setPriority}
            options={priorityOptions}
            className="priority-dropdown"
            disabled={isSubmitting}
            placeholder="Select priority..."
          />
          <button
            type="submit"
            className="add-button"
            disabled={!title.trim() || isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;




