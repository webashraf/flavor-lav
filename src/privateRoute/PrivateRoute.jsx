import { useContext } from "react";
import { ContextProvider } from "../contextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextProvider);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col-reverse gap-10">
        <progress className="progress w-56 text-center"></progress>
        <div
          className="radial-progress"
          style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        >
          70%
        </div>
      </div>
    );
  }

  return user ? (
    children
  ) : (
    <Navigate to={"/signin"} state={{ from: location }}></Navigate>
  );
};

export default PrivateRoute;
