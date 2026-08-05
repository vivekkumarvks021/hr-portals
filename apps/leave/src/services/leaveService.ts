import leaveApi from "../api/leaveApi";
import type { Leave } from "../types/leave";

export const getLeaves = async () => {
  const response = await leaveApi.get<Leave[]>("/leave");
  return response.data;
};

export const getLeaveById = async (id: string) => {
  const response = await leaveApi.get<Leave>(`/leave/${id}`);
  return response.data;
};

export const createLeave = async (data: Omit<Leave, "id">) => {
  const response = await leaveApi.post<Leave>("/leave", data);
  return response.data;
};

export const updateLeave = async (id: string, data: Partial<Leave>) => {
  const response = await leaveApi.put<Leave>(`/leave/${id}`, data);
  return response.data;
};

export const deleteLeave = async (id: string) => {
  await leaveApi.delete(`/leave/${id}`);
  return id;
};
