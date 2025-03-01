import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TryNow from "./Components/TryNow";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Protecting specific routes */}
        <Route path="/try-now" element={<ProtectedRoute><TryNow /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);
