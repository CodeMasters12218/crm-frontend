import { useEffect, useState } from "react";
import { useContactStore } from "../../store/contactStore";
import { useCampaignStore } from "../../store/campaignStore";

export default function ContactsTab({ campaignId }) {
  const { contacts, fetchContacts } = useContactStore();
  const { linkContact, unlinkContact, campaignContacts, fetchCampaignContacts } =
    useCampaignStore();

  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetchContacts();
    fetchCampaignContacts(campaignId);
  }, [campaignId]);

  const handleAdd = async () => {
    if (!selected) return;
    await linkContact(campaignId, selected);
    fetchCampaignContacts(campaignId);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <select
          className="border p-2"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Seleccionar contacto</option>
          {contacts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Añadir
        </button>
      </div>

      <div className="space-y-2">
        {campaignContacts.map((c) => (
          <div
            key={c.id}
            className="p-3 bg-white shadow rounded flex justify-between"
          >
            <p>{c.name}</p>
            <button
              className="text-red-600"
              onClick={() => unlinkContact(campaignId, c.id)}
            >
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}