// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoutes = ({ user }) => {
//   if (user === null) {
//     return <Navigate to="/welcome-screen" />;
//   } else if (user === undefined) {
//     return <Navigate to="/welcome-screen" />;
//   } else {
//     return <Outlet />;
//   }
// };

// export default PrivateRoutes;

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const user = useSelector(state => state.auth.userData)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/welcome-screen");
    }
  }, [user, navigate]);
  if (user) return children;
  return children;
}

export default PrivateRoute