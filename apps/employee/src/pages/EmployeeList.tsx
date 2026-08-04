import { useEffect } from "react";
import EmployeeTable from "../components/EmployeeTable";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteEmployee,
  fetchEmployees,
} from "../features/employee/employeeSlice";

export default function EmployeeList() {
  const { employees, loading, error } = useAppSelector(
    (state) => state.employee,
  );

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  //   const loadEmployees = async () => {
  //     try {
  //       const data = await getEmployees();
  //       setEmployees(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleEdit = (id: string) => {
    navigate(`edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmed) return;

    try {
      await dispatch(deleteEmployee(id)).unwrap();

      dispatch(fetchEmployees());
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
