// import React, { useContext } from "react";
// import { AuthContext } from "../../../components/Contexts/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";
// import { BallTriangle } from "react-loader-spinner";
// import useAdmin from "../../../hooks/useAdmin";

// const AdminRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [isAdmin]=useAdmin(user?.email);
//   const location = useLocation();
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <BallTriangle
//           height={100}
//           width={100}
//           radius={5}
//           color="#4fa94d"
//           ariaLabel="ball-triangle-loading"
//           wrapperClass={{}}
//           wrapperStyle=""
//           visible={true}
//         />
//       </div>
//     );
//   }
//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;
