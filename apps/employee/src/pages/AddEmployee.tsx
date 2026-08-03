import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeService";
import type { Employee } from "../types/employee";
import { employeeRoutes } from "../constants/route";

export default function AddEmployee() {
  const navigate = useNavigate();

  const handleCreate = async (data: Omit<Employee, "id">) => {
    try {
      await createEmployee(data);

      navigate(employeeRoutes.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployeeForm onSubmit={handleCreate} submitButtonText="Save Employee" />
  );
}
