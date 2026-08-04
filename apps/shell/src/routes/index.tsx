import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./../components/layout/Layout";
import Home from "../pages/Home";

const EmployeeApp = lazy(() => import("employee/EmployeeApp"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="employees/*"
            element={<EmployeeApp isStandalone={false} />}
          />

          <Route path="leave" element={<h2>Leave Module</h2>} />

          <Route path="payroll" element={<h2>Payroll Module</h2>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
