import { useEffect, useState } from "react";
import { useContactStore } from "../store/contactStore";
import ContactsTable from "../components/ui/ContactsTable";
import ContactFormModal from "../components/ContactFormModal";

export default function ContactList() {
  const { contacts, fetchContacts, deleteContact, loading, error } =
    useContactStore();

  const [openModal, setOpenModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleNew = () => {
    setSelectedContact(null);
    setOpenModal(true);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setOpenModal(true);
  };

  const handleDelete = async (contact) => {
    if (window.confirm(`¿Eliminar contacto "${contact.name}"?`)) {
      await deleteContact(contact.id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Contactos</h1>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleNew}
        >
          Nuevo contacto
        </button>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {loading && <p>Cargando...</p>}

      {!loading && contacts.length > 0 && (
        <ContactsTable
          data={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {!loading && contacts.length === 0 && (
        <p className="text-sm text-gray-500">No hay contactos todavía.</p>
      )}

      <ContactFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        contact={selectedContact}
      />
    </div>
  );
}