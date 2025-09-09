# TODO Manager - Your Personal Task Manager

A modern, full-stack task management application built with Django REST Framework and React, featuring professional design and advanced theming capabilities.


## ✨ Features

### **Smart Task Management**
- **Simple & Clean**: Add tasks with just a few clicks
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
- **Modern Card Design**: Sophisticated shadows and depth effects
- **Glassmorphism Elements**: Subtle backdrop blur and transparency
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
   - Type a task and press "Add Task"
   - Click any task to mark it complete/incomplete
   - Watch tasks automatically organize themselves
   - Switch between light and dark themes using the toggle in the header
   - Use it on your phone - it's fully responsive!


