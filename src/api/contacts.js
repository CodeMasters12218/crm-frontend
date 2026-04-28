import api from "./http";

export const getContactsAPI = async () => {
  const res = await api.get("/contacts");
  return res.data.data;
};

export const createContactAPI = async (data) => {
  const res = await api.post("/contacts", data);
  return res.data.data;
};

export const updateContactAPI = async (id, data) => {
  const res = await api.put(`/contacts/${id}`, data);
  return res.data.data;
};

export const deleteContactAPI = async (id) => {
  await api.delete(`/contacts/${id}`);
};