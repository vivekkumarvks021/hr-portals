import { useEffect, useState } from "react";

import type { Employee } from "../types/employee";
import { deleteEmployee, getEmployees } from "../services/employeeService";
import EmployeeTable from "../components/EmployeeTable";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmed) return;

    try {
      await deleteEmployee(id);

      await loadEmployees();
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>Employee List</h2>

      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
