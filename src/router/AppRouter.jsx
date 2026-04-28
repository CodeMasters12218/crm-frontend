import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import CampaignList from "../pages/CampaignList";
import CampaignDetail from "../pages/CampaignDetail";
import ContactList from "../pages/ContactList";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<CampaignList />} />
            <Route path="/campaigns/:id" element={<CampaignDetail />} />
            <Route path="/contacts" element={<ContactList />} />
          </Route>
        </Route>

        {/* Default */}
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>
    </BrowserRouter>
  );
}