import axiosInstance from "../axios";

export const getAllRegistrations = async (): Promise<Registration[]> => {
  try {
    const response = await axiosInstance.get("/api/registrations");
    return response.data;
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return [];
  }
};

export const getRegistrationById = async (
  id: number
): Promise<Registration | null> => {
  try {
    const response = await axiosInstance.get(`/api/registrations/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching registration with id ${id}:`, error);
    return null;
  }
};

export const deleteRegistrationById = async (id: number): Promise<boolean> => {
  try {
    await axiosInstance.delete(`/api/registrations/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting registration with id ${id}:`, error);
    return false;
  }
};

export const createRegistration = async (
  registration: MutateRegistration
): Promise<Blog | null> => {
  try {
    const response = await axiosInstance.post(
      "/api/registrations",
      registration
    );
    return response.data;
  } catch (error) {
    console.error("Error creating registration:", error);
    return null;
  }
};

export const updateRegistration = async (
  id: number,
  blog: MutateRegistration
): Promise<Blog | null> => {
  try {
    const response = await axiosInstance.put(`/api/registrations/${id}`, blog);
    return response.data;
  } catch (error) {
    console.error("Error creating registrations:", error);
    return null;
  }
};

export const getRegistrationByUserIdAndEventId = async (
  userId: number,
  eventId: number
): Promise<Registration | null> => {
  try {
    const response = await axiosInstance.get(
      `/api/registrations/user/${userId}/event/${eventId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching registration with user id: ${userId} and event id: ${eventId}:`,
      error
    );
    return null;
  }
};
