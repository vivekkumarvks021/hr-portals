import axios from "axios";

const employeeApi = axios.create({
  baseURL: import.meta.env.VITE_EMPLOYEE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default employeeApi;
