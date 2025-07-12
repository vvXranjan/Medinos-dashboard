import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RetailMaster from './pages/RetailMaster';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout'; // ✅ IMPORT LAYOUT

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Retail Master Login */}
        <Route path="/login" element={<Login />} />

        {/* Retail Master Dashboard (Protected inside Layout) */}
        <Route
          path="/retail-master"
          element={
            <ProtectedRoute>
              <Layout> {/* ✅ Wrap with layout */}
                <RetailMaster />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
