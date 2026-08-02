import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div>
      <h2>Employee Module</h2>

      {/* Future Employee Navigation */}

      <Outlet />
    </div>
  );
}
