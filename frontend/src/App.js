import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/themes.css';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

const API_BASE_URL = 'http://localhost:8000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from API
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/tasks/`);
      // Extract the results array from the paginated response
      setTasks(response.data.results || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please make sure the Django server is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new task
  const addTask = async (title, priority = 'medium') => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks/`, {
        title: title,
        is_done: false,
        priority: priority
      });
      setTasks([response.data, ...tasks]);
      setError(null);
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding task:', err);
    }
  };

  // Toggle task status
  const toggleTask = async (taskId) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/tasks/${taskId}/`);
      setTasks(tasks.map(task => 
        task.id === taskId ? response.data : task
      ));
      setError(null);
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error toggling task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <div className="container">
          <Header />
          <AddTask onAddTask={addTask} />
          {error && <div className="error-message">{error}</div>}
          <TaskList 
            tasks={tasks} 
            loading={loading} 
            onToggleTask={toggleTask}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;




