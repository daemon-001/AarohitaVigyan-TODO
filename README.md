# TODO Manager - Your Personal Task Manager

A modern, full-stack task management application built with Django REST Framework and React, featuring professional design and advanced theming capabilities.

## ✨ What Makes This Special?

### **Smart Task Management**
- **Priority System**: Set High, Medium, or Low priority for each task
- **Priority Filtering**: Filter tasks by priority level with a simple dropdown
- **Visual Organization**: Tasks automatically sort into "Pending" and "Completed" sections
- **One-Click Toggle**: Mark tasks as done with a satisfying click
- **Real-time Updates**: See changes instantly without page refreshes
- **Mobile-First Design**: Works beautifully on your phone, tablet, or desktop

### **Advanced Theming System**
- **Light & Dark Modes**: Switch between bright focus mode and dark comfort mode
- **Theme Persistence**: Your preference is automatically saved
- **Smooth Transitions**: Beautiful animations when switching themes
- **Contextual Information**: Dynamic text explains the purpose of each theme
- **Integrated Controls**: Theme switch and information in one elegant bubble

### **Professional Design**
- **Clean Interface**: Simplified design without card clutter
- **Priority Indicators**: Color-coded priority badges for quick identification
- **Responsive Layout**: Perfect on all screen sizes
- **Smooth Animations**: Micro-interactions that delight users
- **Professional Typography**: Clean, readable fonts with proper spacing

### **Built with Modern Technology**
- **Django REST Framework**: Rock-solid backend that scales
- **React 18**: Lightning-fast, responsive frontend
- **Context API**: Efficient theme state management
- **CSS Custom Properties**: Dynamic theming system
- **Error Handling**: Friendly messages when things go wrong
- **Loading States**: Visual feedback so you always know what's happening

## **Project Structure**

```
TODO-Manager/
├── aarohita_vigyan_todo/     # Django project (the brain)
│   ├── settings.py           # Configuration hub
│   ├── urls.py              # Route definitions
│   └── db.sqlite3           # Your data, safely stored
├── tasks/                    # The task management logic
│   ├── models.py            # How tasks are structured
│   ├── views.py             # API endpoints
│   └── serializers.py       # Data formatting
├── frontend/                 # React app (the beauty)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.js    # App header with theme controls
│   │   │   ├── AddTask.js   # Task creation form
│   │   │   ├── TaskList.js  # Task display component
│   │   │   ├── TaskItem.js  # Individual task component
│   │   │   └── ThemeToggle.js # Theme switch component
│   │   ├── contexts/        # React context providers
│   │   │   └── ThemeContext.js # Theme state management
│   │   ├── styles/          # Global styles and themes
│   │   │   └── themes.css   # CSS custom properties
│   │   └── App.js           # Main application component
│   └── package.json         # Dependencies
├── manage.py                # Django management script
└── requirements.txt         # Python packages needed
```

## **Getting Started**

### **Prerequisites**
- **Python 3.8+** - The language that powers our backend
- **Node.js 14+** - For our React frontend
- **A few minutes** - That's it!

### **Backend Setup**

1. **Create your Python environment**:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up your database**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Create an admin account** (optional):
   ```bash
   python manage.py createsuperuser
   ```

5. **Start your Django server**:
   ```bash
   python manage.py runserver
   ```
   Your API is now running at `http://localhost:8000`

### **Frontend Setup**

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```

2. **Install React dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```
   Your beautiful app is now at `http://localhost:3000`

## **How to Use**

1. **Start both servers**:
   - Backend: `python manage.py runserver` 
   - Frontend: `npm start`

2. **Open your browser** and go to `http://localhost:3000`

3. **Start managing tasks**:
   - Type a task, select priority, and press "Add Task"
   - Click any task to mark it complete/incomplete
   - Filter tasks by priority using the dropdown filter
   - Watch tasks automatically organize themselves
   - Switch between light and dark themes using the toggle in the header
   - Use it on your phone - it's fully responsive!

## **API Endpoints**

| Method | Endpoint | What it does |
|--------|----------|--------------|
| `GET` | `/api/tasks/` | Get all your tasks (supports priority filtering) |
| `POST` | `/api/tasks/` | Create a new task with priority |
| `PATCH` | `/api/tasks/<id>/` | Toggle task completion |

### **Example API Calls**

**Create a task with priority:**
```bash
curl -X POST http://localhost:8000/api/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn something new today!", "priority": "high"}'
```

**Get all tasks:**
```bash
curl http://localhost:8000/api/tasks/
```

**Filter by priority:**
```bash
curl "http://localhost:8000/api/tasks/?priority=high"
```

## **Priority System**

### **Priority Levels**
- **High Priority**: Red badge - Urgent tasks that need immediate attention
- **Medium Priority**: Orange badge - Important tasks that should be done soon
- **Low Priority**: Gray badge - Tasks that can be done when time permits

### **Filtering Options**
- **All Priorities**: View all tasks regardless of priority
- **High Priority**: Show only high-priority tasks
- **Medium Priority**: Show only medium-priority tasks  
- **Low Priority**: Show only low-priority tasks

## **Technical Features**

### **Frontend Architecture**
- **React Context API**: Efficient theme state management across components
- **CSS Custom Properties**: Dynamic theming system with CSS variables
- **Component-based Design**: Modular, reusable UI components
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Modern CSS**: Flexbox, Grid, and advanced animations

### **Theme System**
- **CSS Variables**: Centralized color and spacing management
- **Local Storage**: Persistent theme preferences
- **Smooth Transitions**: CSS transitions for theme changes
- **Context Provider**: React context for theme state
- **Dynamic Styling**: Real-time theme switching without page reload

### **UI/UX Enhancements**
- **Clean Interface**: Simplified design without card clutter
- **Priority Indicators**: Color-coded priority badges for quick identification
- **Micro-interactions**: Subtle animations and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Visual feedback for all async operations
- **Error Handling**: User-friendly error messages

### **Performance Optimizations**
- **Efficient Rendering**: Optimized React component structure
- **CSS Optimization**: Minimal, focused stylesheets
- **Responsive Images**: Optimized for different screen sizes
- **Smooth Animations**: Hardware-accelerated CSS transitions

## **Development Notes**

### **Recent Updates**
- ✅ **Priority System**: Complete priority management with filtering
- ✅ **Clean UI Design**: Removed card clutter for better focus
- ✅ **Theme System**: Complete light/dark mode implementation
- ✅ **Responsive Design**: Perfect mobile and desktop experience
- ✅ **Component Architecture**: Clean, modular React components
- ✅ **CSS Architecture**: Organized styles with custom properties
- ✅ **User Experience**: Smooth animations and micro-interactions

### **Browser Support**
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **CSS Features**: CSS Grid, Flexbox, Custom Properties, Backdrop Filter

