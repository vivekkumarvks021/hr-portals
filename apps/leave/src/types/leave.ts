export interface Leave {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  appliedOn: string;
  approvedBy: string;
  remarks: string;
}
