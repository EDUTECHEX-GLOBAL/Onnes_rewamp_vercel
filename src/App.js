import { Route, Routes, Navigate } from "react-router-dom";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import Layout from "./components/Layout";

// Admin imports
import AdminLogin from "../src/AdminDashboard/pages/AdminLogin";
import AdminDashboard from "../src/AdminDashboard/pages/AdminDashboard";
import PrivateRoute from "./AdminDashboard/components/PrivateRoute";
import HomeDashboard from "./AdminDashboard/components/Home";
import ContactList from "./AdminDashboard/components/ContactList";
import SubscriptionList from "./AdminDashboard/components/SubscriptionList";
import VisitorsList from "./AdminDashboard/components/VisitorsList";

const LEGACY_REDIRECT_PATHS = [
  "space-infrastructure",
  "engineering-tomorrow",
  "orbital-infrastructure",
  "mission-systems",
  "lunar-logistics",
  "hypersonic-isr",
  "about",
  "blog",
  "team",
  "technology",
  "spaceportfolio",
  "ai-simulation",
  "aerospace",
  "capabilities",
  "technologies",
  "services",
  "projects",
  "careers",
  "news",
  "gallery",
];

function App() {
  return (
    <>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />

          {/* Legacy URLs -> Redirect to Home */}
          {LEGACY_REDIRECT_PATHS.map((path) => (
            <Route
              key={path}
              path={path}
              element={<Navigate to="/" replace />}
            />
          ))}
        </Route>

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin-dashboard" element={<PrivateRoute />}>
          <Route element={<AdminDashboard />}>
            <Route index element={<HomeDashboard />} />
            <Route path="admin-home" element={<HomeDashboard />} />
            <Route path="admin-contact" element={<ContactList />} />
            <Route path="admin-subscribe" element={<SubscriptionList />} />
            <Route path="admin-visitors" element={<VisitorsList />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;