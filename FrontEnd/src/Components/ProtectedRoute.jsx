import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import App from "../App.jsx";

export default function ProtectedRoute() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <App /> : <Navigate to="/sign-in" replace />;
}
