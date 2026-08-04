import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import type { Employee } from "../types/employee";
import { employeeRoutes } from "../constants/route";
import { useAppDispatch } from "../store/hooks";
import { createEmployee } from "../features/employee/employeeSlice";

export default function AddEmployee() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreate = async (data: Omit<Employee, "id">) => {
    try {
      await dispatch(createEmployee(data)).unwrap();

      navigate(employeeRoutes.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployeeForm onSubmit={handleCreate} submitButtonText="Save Employee" />
  );
}
