# Shift Scheduler – Bakery Edition

A Java + React app to manage employee shifts, vacations, and payroll for a small bakery.

---

## 🧱 Stack

- Java 17 + Spring Boot
- React + Vite + Material UI
- PostgreSQL + Docker
- Spring Security (login)

---

## 🚀 Local Development Setup


Frontend: http://localhost:8080

Backend (API): http://localhost:8081

PostgreSQL DB: localhost:5432 (if needed for local access)


## 1. Build the docker image 
Run the development server:
npm run dev
Then open http://localhost:5173 in your browser.

cd shift-scheduler-frontend

docker build -t shift-scheduler-frontend .

docker run -d -p 8080:80 --name shift-scheduler-frontend shift-scheduler-frontend
