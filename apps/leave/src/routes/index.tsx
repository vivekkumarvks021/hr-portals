import { Routes, Route } from "react-router-dom";
import LeaveList from "../pages/LeaveList";
import ApplyLeave from "../pages/ApplyLeave";

type Props = {
  isStandalone?: boolean;
};

export default function LeaveRoutes({ isStandalone = true }: Props) {
  return (
    <Routes>
      <Route index element={<LeaveList />} />
      <Route path="apply" element={<ApplyLeave />} />
    </Routes>
  );
}
