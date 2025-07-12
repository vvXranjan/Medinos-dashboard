import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('userRole');

  // Check that only 'retailMaster' role is allowed
  return role === 'retailMaster' ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
