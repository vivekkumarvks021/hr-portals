import { createSlice } from "@reduxjs/toolkit";
import type { Leave } from "../../types/leave";
import {
  fetchLeaves,
  fetchLeaveById,
  addLeave,
  editLeave,
  removeLeave,
} from "./leaveThunk";

interface LeaveState {
  leaves: Leave[];
  selectedLeave: Leave | null;
  loading: boolean;
  error: string | null;
}

const initialState: LeaveState = {
  leaves: [],
  selectedLeave: null,
  loading: false,
  error: null,
};

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch All Leaves
      // ==========================
      .addCase(fetchLeaves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.leaves = action.payload;
      })
      .addCase(fetchLeaves.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ==========================
      // Fetch Leave By Id
      // ==========================
      .addCase(fetchLeaveById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaveById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedLeave = action.payload;
      })
      .addCase(fetchLeaveById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ==========================
      // Add Leave
      // ==========================
      .addCase(addLeave.fulfilled, (state, action) => {
        state.leaves.push(action.payload);
      })

      // ==========================
      // Edit Leave
      // ==========================
      .addCase(editLeave.fulfilled, (state, action) => {
        const index = state.leaves.findIndex(
          (leave) => leave.id === action.payload.id,
        );

        if (index !== -1) {
          state.leaves[index] = action.payload;
        }

        if (
          state.selectedLeave &&
          state.selectedLeave.id === action.payload.id
        ) {
          state.selectedLeave = action.payload;
        }
      })

      // ==========================
      // Delete Leave
      // ==========================
      .addCase(removeLeave.fulfilled, (state, action) => {
        state.leaves = state.leaves.filter(
          (leave) => leave.id !== action.payload,
        );

        if (state.selectedLeave && state.selectedLeave.id === action.payload) {
          state.selectedLeave = null;
        }
      });
  },
});

export default leaveSlice.reducer;
