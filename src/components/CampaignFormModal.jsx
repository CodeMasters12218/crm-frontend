import { useState } from "react";
import Modal from "./ui/Modal";
import { useCampaignStore } from "../store/campaignStore";

export default function CampaignFormModal({ open, onClose }) {
  const { createCampaign, loading } = useCampaignStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCampaign({ title, description });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Nueva campaña">
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="border p-2 w-full"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Crear campaña"}
        </button>
      </form>
    </Modal>
  );
}