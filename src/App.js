import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import Layout from './components/Layout';

// Admin imports
import AdminLogin from '../src/AdminDashboard/pages/AdminLogin';
import AdminDashboard from '../src/AdminDashboard/pages/AdminDashboard';
import PrivateRoute from './AdminDashboard/components/PrivateRoute';
import HomeDashboard from './AdminDashboard/components/Home';
import ContactList from './AdminDashboard/components/ContactList';
import SubscriptionList from './AdminDashboard/components/SubscriptionList';
import VisitorsList from './AdminDashboard/components/VisitorsList';

function App() {
  return (
    <>
      <Routes>
        {/* Main Layout with Default Header */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />        
        </Route>

        {/* Admin Routes */}
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

        {/* Catch-All Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
