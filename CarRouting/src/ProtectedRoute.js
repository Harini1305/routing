import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
