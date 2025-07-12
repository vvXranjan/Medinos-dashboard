# 🛍️ Medinos Retail Master Dashboard

A full-featured, visually appealing React dashboard built for monitoring retail order metrics, managing users, and analyzing sales performance.

---

## ✨ Features

- 🔐 **Protected Login System** with user role
- 📊 **Retail Metrics Dashboard**
  - Total Orders, Total Amount, Pending / Confirmed / Delivered
- 📈 **Data Visualizations**
  - Line Chart: Order Amount vs Date
  - Bar Chart: Order Count vs Date
- 🧑‍💼 **My Profile Dropdown**
  - Edit Name, Change Password, Help Center, Logout
- 🧭 **Sidebar Navigation**
  - Category, Delivery Boys, Coupons, APK, Warehouse Orders
- 🎨 **Modern & Responsive UI**
  - Built using Tailwind CSS + Framer Motion animations

---

## 🖥️ Tech Stack

| Technology      | Purpose                  |
|-----------------|--------------------------|
| React.js        | Front-end UI             |
| Tailwind CSS    | Styling & responsiveness |
| Recharts        | Graphs & data charts     |
| React Router    | Routing & protection     |
| Framer Motion   | Animations               |

---

## 🧪 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vvXranjan/medinos-dash.git
cd medinos-dash

### 2. Install Dependencies
npm install


###3. Start the Development Server
npm start

🔐 Login Credentials
Role	Username	Password
Retail Master	retail	master123


medinos-dash/
│
├── public/                   # Static files
│
├── src/                      # Main application
│   ├── components/           # Reusable components
│   │   ├── Layout.js
│   │   ├── Sidebar.js
│   │   ├── Topbar.js
│   │   ├── ProtectedRoute.js
│   │
│   ├── pages/                # App pages/screens
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── RetailMaster.js
│   │
│   ├── App.js                # Route management
│   ├── index.js              # React root render
│   └── index.css             # Global styles


## 📸 Dashboard Preview


## 📸 Dashboard Preview

![Retail Master Dashboard](https://raw.githubusercontent.com/vvXranjan/Medinos-dashboard/main/assets/Medinos-dash.png)





🖼️ Dashboard Preview
📊 Retail Master Dashboard
- Order metrics
- Visual graphs
- Sidebar menu
- My Profile dropdown

 Future Enhancements
🔌 Connect to backend APIs for live data
🔐 Role-based routing (Retailer, Warehouse, Admin)
📤 Export graphs/data to PDF or CSV
📱 Progressive Web App (PWA) support
