# personalPortfolio

A full-stack portfolio web app built with Django (backend) and React (frontend).  
Showcase your skills, services, and projects with a modern workflow and cloud deployment!

---

## 📁 Project Structure

portfolio_project_root/

├── portfolio_backend/ # Django API backend (Python, PostgreSQL)

├── portfolio_frontend/ # React (Vite) frontend

├── venv/ # Python virtual environment (not tracked by git)

---

## 🚀 Features

- Modern React frontend: dynamic pages, clean UI
- Django REST API backend: modular, scalable, secure
- Skill & service management, admin area
- API integration ready for cloud deployment
- Full-stack authentication-ready basis

---

## 🛠️ Setup Instructions

### 1. **Clone the repository**

git clone https://github.com/vishchievous01/personalPortfolio.git
cd personalPortfolio


### 2. **Backend: Django Setup (`portfolio_backend/`)**

cd portfolio_backend
python -m venv .venv
source .venv/bin/activate # Or .venv\Scripts\activate (Windows)
pip install -r requirements.txt

Set up environment variables for secret key, DB, etc.
python manage.py migrate
python manage.py createsuperuser # (optional, for admin)
python manage.py runserver


### 3. **Frontend: React (Vite) Setup (`portfolio_frontend/`)**

cd portfolio_frontend
npm install
npm run dev # or npm start (for Create React App)


---

## 🌐 Deployment

### **Backend (Django)**
- Deploy as a **Web Service** on [Render](https://render.com)
  - Root directory: `portfolio_backend`
  - Build: `pip install -r requirements.txt`
  - Start: `gunicorn portfolio_backend.wsgi:application`

### **Frontend (React)**
- Deploy as a **Static Site** on [Netlify](https://netlify.com)
  - Directory: `portfolio_frontend`
  - Build: `npm run build`
  - Publish: `dist` (Vite) or `build` (CRA)

---

## ⚙️ Configuration

Set environment variables for Django (`.env` or via Render dashboard):

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DATABASE_URL`
- Add your Netlify URL to `CORS_ALLOWED_ORIGINS` in Django settings!

---

## 📄 License

[MIT](LICENSE)

---

## ✨ Credits

- Built by [vishchievous01](https://github.com/vishchievous01)
- Technologies: Django, React (Vite), Render, Netlify

---

## 📬 Contact

For questions, reach out on GitHub issues or [your@email.com](mailto:pv.vishnu498@gmail.com)

Copy, customize, and place this as README.md at your repo root!
Let me know if you want badges, more sections, or a different tone.
