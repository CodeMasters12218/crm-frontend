import { create } from "zustand";
import { loginRequest, registerRequest, meRequest, logoutRequest } from "../api/auth";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await loginRequest(email, password);
      localStorage.setItem("token", res.token);
      set({ user: res.user, token: res.token });
    } catch (err) {
      set({ error: err.response?.data?.message || "Error", user: null });
    } finally {
      set({ loading: false });
    }
  },

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await registerRequest(data);
      localStorage.setItem("token", res.token);
      set({ user: res.user, token: res.token });
    } catch (err) {
      set({ error: err.response?.data?.message || "Error" });
    } finally {
      set({ loading: false });
    }
  },

  fetchUser: async () => {
    try {
      const res = await meRequest();
      set({ user: res.user });
    } catch {
      set({ user: null, token: null });
    }
  },

  logout: async () => {
    await logoutRequest();
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));