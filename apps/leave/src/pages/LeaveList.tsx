import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaves } from "../features/leave/leaveThunk";
import type { AppDispatch, RootState } from "../store/store";
import SummaryCards from "../components/SummaryCards";
import LeaveTable from "../components/LeaveTable";

export default function LeaveList() {
  const dispatch = useDispatch<AppDispatch>();

  const { leaves } = useSelector((state: RootState) => state.leave);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  return (
    <>
      <Typography>Leave Management</Typography>

      <SummaryCards leaves={leaves} />
      <LeaveTable leaves={leaves} />
    </>
  );
}
