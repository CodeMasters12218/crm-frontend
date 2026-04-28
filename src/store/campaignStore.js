import { create } from "zustand";
import {
  getCampaignsAPI,
  createCampaignAPI,
} from "../api/campaigns";

export const useCampaignStore = create((set) => ({
  campaigns: [],
  loading: false,
  error: null,

  fetchCampaigns: async () => {
    set({ loading: true });
    try {
      const res = await getCampaignsAPI();
      set({ campaigns: res });
    } catch (err) {
      set({ error: "Error cargando campañas" });
    } finally {
      set({ loading: false });
    }
  },

  createCampaign: async (data) => {
    set({ loading: true });
    try {
      const newCampaign = await createCampaignAPI(data);
      set((state) => ({
        campaigns: [newCampaign, ...state.campaigns],
      }));
    } catch (err) {
      set({ error: "Error creando campaña" });
    } finally {
      set({ loading: false });
    }
  },
}));