import axios from 'axios';
import { Course } from '../types/course';

const BASE_URL = 'http://localhost:3001';

export const getCourses = async (): Promise<Course[]> => {
  const response = await axios.get<Course[]>(`${BASE_URL}/courses`);
  return response.data;
};

export const createCourse = async (course: Course): Promise<Course> => {
  const response = await axios.post<Course>(`${BASE_URL}/course`, course);
  return response.data;
};

export const updateCourse = async (id: string, course: Course): Promise<Course> => {
  const response = await axios.put<Course>(`${BASE_URL}/course/${id}`, course);
  return response.data;
};

export const deleteCourse = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/course/${id}`);
};
