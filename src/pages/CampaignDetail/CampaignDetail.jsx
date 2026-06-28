import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCampaignStore } from "../../store/campaignStore";
import Tabs from "./Tabs";
import OverviewTab from "./OverviewTab";
import TasksTab from "./TasksTab";
import ContactsTab from "./ContactsTab";
import ActivityTab from "./ActivityTab";

export default function CampaignDetail() {
  const { id } = useParams();
  const { fetchCampaignById, selectedCampaign, loading } = useCampaignStore();

  const [tab, setTab] = useState("overview");

  useEffect(() => {
    fetchCampaignById(id);
  }, [id]);

  if (loading || !selectedCampaign) return <p>Cargando campaña…</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        {selectedCampaign.title}
      </h1>

      <Tabs tab={tab} setTab={setTab} />

      <div className="mt-6">
        {tab === "overview" && <OverviewTab campaign={selectedCampaign} />}
        {tab === "tasks" && <TasksTab campaignId={id} />}
        {tab === "contacts" && <ContactsTab campaignId={id} />}
        {tab === "activity" && <ActivityTab campaignId={id} />}
      </div>
    </div>
  );
}