# Aarohita Vigyan TODO - Task Management System

A modern, full-stack task management application built with Django REST Framework and React for Aarohita Vigyan Private Limited.

## Features

### Backend (Django + DRF)
- ✅ Task model with title and is_done fields
- ✅ RESTful API endpoints:
  - `POST /api/tasks/` - Create new task
  - `GET /api/tasks/` - List all tasks
  - `PATCH /api/tasks/<id>/` - Toggle task completion status
- ✅ CORS configuration for React frontend
- ✅ Admin interface for task management
- ✅ Automatic timestamps (created_at, updated_at)

### Frontend (React)
- ✅ Modern, responsive UI design
- ✅ Task list display with pending/completed sections
- ✅ Add new tasks functionality
- ✅ Toggle task completion status
- ✅ Real-time updates
- ✅ Loading states and error handling
- ✅ Mobile-responsive design

## Project Structure

```
AarohitaVigyan-TODO/
├── aarohita_vigyan_todo/     # Django project settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── tasks/                     # Django tasks app
│   ├── __init__.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
├── frontend/                  # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── AddTask.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── requirements.txt
├── manage.py
└── README.md
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- pip (Python package manager)
- npm (Node package manager)

### Backend Setup (Django)

1. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example environment file
   copy env.example .env
   # Edit .env with your settings
   ```

4. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start Django development server:**
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://localhost:8000`

### Frontend Setup (React)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start React development server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks/` | Retrieve all tasks |
| POST | `/api/tasks/` | Create a new task |
| PATCH | `/api/tasks/<id>/` | Toggle task completion status |

### Example API Usage

**Create a task:**
```bash
curl -X POST http://localhost:8000/api/tasks/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete project documentation"}'
```

**Get all tasks:**
```bash
curl http://localhost:8000/api/tasks/
```

**Toggle task completion:**
```bash
curl -X PATCH http://localhost:8000/api/tasks/1/
```

## Usage

1. **Start both servers:**
   - Django backend: `python manage.py runserver` (port 8000)
   - React frontend: `npm start` (port 3000)

2. **Access the application:**
   - Open `http://localhost:3000` in your browser
   - Add new tasks using the input field
   - Click on tasks to toggle their completion status
   - Tasks are automatically organized into Pending and Completed sections

3. **Admin interface:**
   - Access `http://localhost:8000/admin/` to manage tasks through Django admin
   - Use the superuser credentials created during setup

## Technical Details

### Backend Technologies
- **Django 4.2.7** - Web framework
- **Django REST Framework 3.14.0** - API framework
- **django-cors-headers 4.3.1** - CORS handling
- **python-decouple 3.8** - Environment variable management

### Frontend Technologies
- **React 18.2.0** - UI library
- **Axios 1.4.0** - HTTP client
- **CSS3** - Styling with modern features (flexbox, grid, animations)

### Key Features Implementation
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Real-time Updates**: Immediate UI updates after API calls
- **Error Handling**: User-friendly error messages and loading states
- **Modern UI**: Gradient backgrounds, smooth animations, and clean typography
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Development Notes

- The Django backend uses SQLite for simplicity (easily changeable to PostgreSQL/MySQL)
- CORS is configured to allow requests from `localhost:3000`
- The React app uses a proxy configuration for API calls
- All API responses follow RESTful conventions
- The UI is fully responsive and works on mobile devices

## Future Enhancements

- User authentication and authorization
- Task categories and tags
- Due dates and reminders
- Task search and filtering
- Bulk operations
- Data persistence with PostgreSQL
- Docker containerization
- Unit and integration tests

---

**Developed for Aarohita Vigyan Private Limited**  
*Practical Task - Django + React Full-Stack Application*




