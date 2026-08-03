import employeeApi from "../api/employeeApi";
import type { Employee } from "../types/employee";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await employeeApi.get<Employee[]>("/employee");
  return response.data;
};

export const createEmployee = async (
  employee: Omit<Employee, "id">,
): Promise<Employee> => {
  const response = await employeeApi.post<Employee>("/employee", employee);

  return response.data;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await employeeApi.get<Employee>(`/employee/${id}`);
  return response.data;
};

export const updateEmployee = async (
  id: string,
  employee: Omit<Employee, "id">,
): Promise<Employee> => {
  const response = await employeeApi.put<Employee>(`/employee/${id}`, employee);

  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await employeeApi.delete(`/employee/${id}`);
};
