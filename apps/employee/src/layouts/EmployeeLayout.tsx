import { NavLink, Outlet } from "react-router-dom";
type EmployeeLayoutProps = {
  isStandalone?: boolean;
};

export default function EmployeeLayout({ isStandalone }: EmployeeLayoutProps) {
  const addEmpUrl = `${isStandalone ? "" : "/employees"}/add`;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      <nav
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <NavLink to={isStandalone ? "/" : "/employees"}>Employee List</NavLink>

        <NavLink to={addEmpUrl}>Add Employee</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
