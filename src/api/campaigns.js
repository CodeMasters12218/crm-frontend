import api from "./http";

export const getCampaignsAPI = async () => {
  const res = await api.get("/campaigns");
  return res.data.data;
};

export const createCampaignAPI = async (data) => {
  const res = await api.post("/campaigns", data);
  return res.data.data;
};