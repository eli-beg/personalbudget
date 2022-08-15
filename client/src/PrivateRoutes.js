import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
  if (user === null) {
    return <Navigate to="/welcome-screen" />;
  } else if (user === undefined) {
    return <Navigate to="/welcome-screen" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoutes;
