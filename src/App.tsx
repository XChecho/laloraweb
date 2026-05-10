/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";

import AdminLayout from "./layouts/AdminLayout";
import AdminTables from "./pages/AdminTables";
import AdminCashier from "./pages/AdminCashier";
import AdminKitchen from "./pages/AdminKitchen";
import AdminRestaurants from "./pages/AdminRestaurants";
import AdminMenu from "./pages/AdminMenu";
import AdminUsers from "./pages/AdminUsers";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-secondary/30 flex flex-col text-left">
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Main Navbar/Footer */}
          <Route path="/*" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/restaurants" element={<Restaurants />} />
                  <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />

          {/* Admin Dashboard Routes - No Public Navbar/Footer */}
          <Route path="/admin/*" element={
            <AdminLayout>
              <Routes>
                <Route path="/" element={<AdminRestaurants />} />
                <Route path="/tables" element={<AdminTables />} />
                <Route path="/cashier" element={<AdminCashier />} />
                <Route path="/kitchen" element={<AdminKitchen />} />
                <Route path="/restaurants" element={<AdminRestaurants />} />
                <Route path="/menu" element={<AdminMenu />} />
                <Route path="/users" element={<AdminUsers />} />
              </Routes>
            </AdminLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}
