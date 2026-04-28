import { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import { useContactStore } from "../store/contactStore";

export default function ContactFormModal({ open, onClose, contact }) {
  const { createContact, updateContact, loading } = useContactStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name || "");
      setEmail(contact.email || "");
      setPhone(contact.phone || "");
      setRole(contact.role || "");
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
    }
  }, [contact, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, phone, role };

    if (contact) {
      await updateContact(contact.id, payload);
    } else {
      await createContact(payload);
    }

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={contact ? "Editar contacto" : "Nuevo contacto"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Rol"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Guardando..." : contact ? "Guardar cambios" : "Crear contacto"}
        </button>
      </form>
    </Modal>
  );
}