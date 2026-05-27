import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage.jsx';
import Signup from './landing_page/signup/SignUp.jsx';
import Login from './landing_page/signup/Login.jsx';
import Logout from './landing_page/signup/Logout.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import ProductsPage from './landing_page/products/ProductsPage.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import Footer from './landing_page/Footer.jsx';
import Navbar from './landing_page/Navbar.jsx';
import PageNotFound from './PageNotFound.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { DASHBOARD_URL } from './config/env';

const DashboardRedirect = () => {
  useEffect(() => {
    window.location.replace(DASHBOARD_URL);
  }, []);

  return null;
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* just to keep the navbar same for for all pages accross the website */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path='/support' element={<SupportPage />} />
          {/* Dashboard route - redirects to dashboard app */}
          <Route path='/dashboard' element={<DashboardRedirect />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        {/* just to keep the footer sampe for each page */}
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
