import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Employee } from "../types/employee";
import { getEmployeeById } from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";
import { useAppDispatch } from "../store/hooks";
import { updateEmployee } from "../features/employee/employeeSlice";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!id) return;

      try {
        const data = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleUpdate = async (employeeData: Omit<Employee, "id">) => {
    if (!id) return;

    try {
      await dispatch(
        updateEmployee({
          id,
          employee: employeeData,
        }),
      ).unwrap();

      navigate("..", { relative: "route" });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!employee) {
    return <h3>Employee not found.</h3>;
  }

  return (
    <EmployeeForm
      initialValues={employee}
      onSubmit={handleUpdate}
      submitButtonText="Update Employee"
    />
  );
};

export default EditEmployee;
