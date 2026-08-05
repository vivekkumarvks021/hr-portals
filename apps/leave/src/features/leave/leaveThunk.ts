import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLeaves,
  getLeaveById,
  createLeave,
  updateLeave,
  deleteLeave,
} from "../../services/leaveService";
import type { Leave } from "../../types/leave";

// Get All Leaves
export const fetchLeaves = createAsyncThunk(
  "leave/fetchLeaves",
  async (_, thunkAPI) => {
    try {
      return await getLeaves();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Get Leave By Id
export const fetchLeaveById = createAsyncThunk(
  "leave/fetchLeaveById",
  async (id: string, thunkAPI) => {
    try {
      return await getLeaveById(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Create Leave
export const addLeave = createAsyncThunk(
  "leave/addLeave",
  async (data: Omit<Leave, "id">, thunkAPI) => {
    try {
      return await createLeave(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Update Leave
export const editLeave = createAsyncThunk(
  "leave/editLeave",
  async ({ id, data }: { id: string; data: Partial<Leave> }, thunkAPI) => {
    try {
      return await updateLeave(id, data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Delete Leave
export const removeLeave = createAsyncThunk(
  "leave/removeLeave",
  async (id: string, thunkAPI) => {
    try {
      await deleteLeave(id);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
