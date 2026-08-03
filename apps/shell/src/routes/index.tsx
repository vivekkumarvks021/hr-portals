import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const EmployeeRoutes = lazy(() => import("employee/EmployeeRoutes"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading Employee...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/employees/*" element={<EmployeeRoutes />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
