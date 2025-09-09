# Aarohita Vigyan TODO - Your Personal Task Manager

A modern, full-stack task management application built with Django REST Framework and React for Aarohita Vigyan Private Limited.

## What Makes This Special?

### **Smart Task Management**
- **Simple & Clean**: Add tasks with just a few clicks
- **Visual Organization**: Tasks automatically sort into "Pending" and "Completed" sections
- **One-Click Toggle**: Mark tasks as done with a satisfying click
- **Real-time Updates**: See changes instantly without page refreshes
- **Mobile-First Design**: Works beautifully on your phone, tablet, or desktop

### **Built with Modern Technology**
- **Django REST Framework**: Rock-solid backend that scales
- **React 18**: Lightning-fast, responsive frontend
- **Beautiful UI**: Gradient backgrounds, smooth animations, and thoughtful design
- **Error Handling**: Friendly messages when things go wrong
- **Loading States**: Visual feedback so you always know what's happening

## **Project Structure**

```
AarohitaVigyan-TODO/
├── aarohita_vigyan_todo/     # Django project (the brain)
│   ├── settings.py           # Configuration hub
│   ├── urls.py              # Route definitions
│   └── db.sqlite3           # Your data, safely stored
├── tasks/                    # The task management logic
│   ├── models.py            # How tasks are structured
│   ├── views.py             # API endpoints
│   └── serializers.py       # Data formatting
├── frontend/                 # React app (the beauty)
│   ├── src/components/      # Reusable UI components
│   └── package.json         # Dependencies
├── run_server.py            # Start your Django server
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
   python run_server.py makemigrations
   python run_server.py migrate
   ```

4. **Create an admin account** (optional):
   ```bash
   python run_server.py createsuperuser
   ```

5. **Start your Django server**:
   ```bash
   python run_server.py runserver
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
   - Backend: `python run_server.py runserver` 
   - Frontend: `npm start`

2. **Open your browser** and go to `http://localhost:3000`

3. **Start managing tasks**:
   - Type a task and press "Add Task"
   - Click any task to mark it complete/incomplete
   - Watch tasks automatically organize themselves
   - Use it on your phone - it's fully responsive!

## **API Endpoints**

| Method | Endpoint | What it does |
|--------|----------|--------------|
| `GET` | `/api/tasks/` | Get all your tasks |
| `POST` | `/api/tasks/` | Create a new task |
| `PATCH` | `/api/tasks/<id>/` | Toggle task completion |

### **Example API Calls**

**Create a task:**
```bash
curl -X POST http://localhost:8000/api/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn something new today!"}'
```

**Get all tasks:**
```bash
curl http://localhost:8000/api/tasks/
```

