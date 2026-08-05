import axios from "axios";

const leaveApi = axios.create({
  baseURL: import.meta.env.VITE_LEAVE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default leaveApi;
