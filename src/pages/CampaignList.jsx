import { useEffect, useState } from "react";
import { useCampaignStore } from "../store/campaignStore";
import Table from "../components/ui/Table";
import CampaignFormModal from "../components/CampaignFormModal";
import { useNavigate } from "react-router-dom";

export default function CampaignList() {
  const navigate = useNavigate();
  const { campaigns, fetchCampaigns, loading } = useCampaignStore();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const columns = [
    { key: "title", label: "Título" },
    { key: "status", label: "Estado" },
    { key: "start_date", label: "Inicio" },
    { key: "end_date", label: "Fin" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Campañas</h1>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setOpenModal(true)}
        >
          Nueva campaña
        </button>
      </div>

      {loading && <p>Cargando...</p>}

      {!loading && (
        <Table
          columns={columns}
          data={campaigns}
          onRowClick={(row) => navigate(`/campaigns/${row.id}`)}
        />
      )}

      <CampaignFormModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}