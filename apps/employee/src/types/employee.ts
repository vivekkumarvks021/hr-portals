export interface Employee {
  id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  department: string;
  designation: string;

  status: "Active" | "Inactive";
}
