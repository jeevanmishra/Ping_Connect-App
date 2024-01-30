import { Navigate, useLocation } from "react-router-dom";
import { getAuthFromLocalStorage } from "../../services/localstorage-service";
const CanActivate = ({ children }) => {
  const location = useLocation();
  return getAuthFromLocalStorage() !== null ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default CanActivate;
