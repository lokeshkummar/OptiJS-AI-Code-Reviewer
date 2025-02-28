import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import App from "../app";

export default function ProtectedRoute() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <App /> : <Navigate to="/sign-in" replace />;
}
