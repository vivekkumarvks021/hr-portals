import { Routes, Route } from "react-router-dom";
import EmployeeLayout from "../layouts/EmployeeLayout";
import EmployeeList from "../pages/EmployeeList";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";

type Props = {
  isStandalone?: boolean;
};

export default function EmployeeRoutes({ isStandalone = true }: Props) {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLayout isStandalone={isStandalone} />}>
        <Route index element={<EmployeeList />} />
        <Route path="add" element={<AddEmployee />} />
        <Route path="edit/:id" element={<EditEmployee />} />
      </Route>
    </Routes>
  );
}
