import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};
export default ProtectedRouter;
