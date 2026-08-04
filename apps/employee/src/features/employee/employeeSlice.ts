import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getEmployees,
  createEmployee as addEmployee,
  updateEmployee as updateEmp,
  deleteEmployee as deleteEmp,
} from "../../services/employeeService";
import type { Employee } from "../../types/employee";

type EmployeeState = {
  employees: Employee[];
  loading: boolean;
  error: string | null;
};

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await getEmployees();
    return response;
  },
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee: Omit<Employee, "id">) => {
    const response = await addEmployee(employee);
    return response;
  },
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, employee }: { id: string; employee: Omit<Employee, "id"> }) => {
    const response = await updateEmp(id, employee);
    return response;
  },
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    await deleteEmp(id);
    return id;
  },
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to create employee";
      })
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.employees.findIndex(
          (emp) => emp.id === action.payload.id,
        );

        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to update employee";
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;

        state.employees = state.employees.filter(
          (emp) => emp.id !== action.payload,
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to delete employee";
      });
  },
});

export default employeeSlice.reducer;
