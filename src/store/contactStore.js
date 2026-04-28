import { create } from "zustand";
import {
  getContactsAPI,
  createContactAPI,
  updateContactAPI,
  deleteContactAPI,
} from "../api/contacts";

export const useContactStore = create((set) => ({
  contacts: [],
  loading: false,
  error: null,

  fetchContacts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getContactsAPI();
      set({ contacts: res });
    } catch {
      set({ error: "Error cargando contactos" });
    } finally {
      set({ loading: false });
    }
  },

  createContact: async (data) => {
    set({ loading: true, error: null });
    try {
      const contact = await createContactAPI(data);
      set((state) => ({ contacts: [contact, ...state.contacts] }));
    } catch {
      set({ error: "Error creando contacto" });
    } finally {
      set({ loading: false });
    }
  },

  updateContact: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateContactAPI(id, data);
      set((state) => ({
        contacts: state.contacts.map((c) => (c.id === id ? updated : c)),
      }));
    } catch {
      set({ error: "Error actualizando contacto" });
    } finally {
      set({ loading: false });
    }
  },

  deleteContact: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteContactAPI(id);
      set((state) => ({
        contacts: state.contacts.filter((c) => c.id !== id),
      }));
    } catch {
      set({ error: "Error eliminando contacto" });
    } finally {
      set({ loading: false });
    }
  },
}));