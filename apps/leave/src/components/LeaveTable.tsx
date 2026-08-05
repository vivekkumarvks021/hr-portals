import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import type { Leave } from "../types/leave";

interface LeaveTableProps {
  leaves: Leave[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Rejected":
      return "error";
    default:
      return "warning";
  }
};

export default function LeaveTable({ leaves }: LeaveTableProps) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Employee</b>
            </TableCell>
            <TableCell>
              <b>Leave Type</b>
            </TableCell>
            <TableCell>
              <b>From</b>
            </TableCell>
            <TableCell>
              <b>To</b>
            </TableCell>
            <TableCell>
              <b>Days</b>
            </TableCell>
            <TableCell>
              <b>Reason</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
            <TableCell align="center">
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {leaves.map((leave) => (
            <TableRow key={leave.id} hover>
              <TableCell>{leave.employeeName}</TableCell>
              <TableCell>{leave.leaveType}</TableCell>
              <TableCell>{leave.fromDate}</TableCell>
              <TableCell>{leave.toDate}</TableCell>
              <TableCell>{leave.days}</TableCell>
              <TableCell>{leave.reason}</TableCell>

              <TableCell>
                <Chip
                  label={leave.status}
                  color={getStatusColor(leave.status)}
                  size="small"
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>

                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          {leaves.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} align="center">
                No Leave Records Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
