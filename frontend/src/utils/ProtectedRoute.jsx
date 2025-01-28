import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { RolesContext } from "../App";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRoles = useContext(RolesContext);

  console.log("User roles:", userRoles);
  console.log("Allowed roles:", allowedRoles);

  // Check if the user roles have been fetched or are available
  if (!userRoles || userRoles.length === 0) {
    return <div>Loading...</div>; // Show loading indicator while fetching roles
  }

  // Check if any of the user's roles match the allowed roles
  const isAuthorized = allowedRoles.some((role) => userRoles.includes(role));
  console.log("Is user authorized:", isAuthorized);

  if (!isAuthorized) {
    return <Navigate to="/NotFound" replace />;
  }

  return children;
};

export default ProtectedRoute;
