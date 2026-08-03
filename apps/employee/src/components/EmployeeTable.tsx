import type { Employee } from "../types/employee";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
type EmployeeTableProps = {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}: EmployeeTableProps) {
  return (
    <table border={1} cellPadding={10} cellSpacing={0} width="100%">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>{employee.designation}</td>
            <td>{employee.status}</td>
            <td
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <IconButton
                color="primary"
                size="small"
                onClick={() => onEdit(employee.id)}
              >
                <EditIcon fontSize="small" />
              </IconButton>

              <IconButton
                color="error"
                size="small"
                onClick={() => onDelete(employee.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
