# 🛍️ Medinos Retail Master Dashboard

A fully responsive, visually appealing React-based dashboard for monitoring order metrics and analytics. This project features protected login, sales data visualizations, user role-based access, and an elegant UI built with TailwindCSS, Framer Motion, and Recharts.

---

## 🚀 Features

- 🔐 **Secure Login System** (Local Auth Simulation)
- 📊 **Order Metrics Dashboard**
  - Total Orders
  - Total Order Amount
  - Pending / Confirmed / Delivered Orders
- 📈 **Interactive Graphs**
  - Line Chart: Order Amount vs Date
  - Bar Chart: Order Count vs Date
- 🎨 **Modern UI**
  - Sidebar with Navigation (Retail Master Options)
  - Profile Dropdown (Edit Name, Change Password, Help Center, Logout)
  - Smooth animations with [Framer Motion](https://www.framer.com/motion/)
- 🌐 **Responsive Design**
  - Mobile & desktop-friendly layout with TailwindCSS

---

## 🧑‍💻 Tech Stack

- ⚛️ **React JS**
- 🎨 **Tailwind CSS**
- 📦 **Recharts** for graphs
- 🎥 **Framer Motion** for animations
- 🔐 **React Router DOM** for routing and protected access

---

## 📁 Folder Structure
medinos-dash/
├── public/
├── src/
│ ├── components/
│ │ ├── Layout.js
│ │ ├── Sidebar.js
│ │ ├── Topbar.js
│ │ ├── ProtectedRoute.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── RetailMaster.js
│ ├── App.js
│ ├── index.js
│ └── index.css
