import { useEffect } from "react";
import { useActivityStore } from "../../store/activityStore";

export default function ActivityTab({ campaignId }) {
  const { activity, fetchActivityByCampaign } = useActivityStore();

  useEffect(() => {
    fetchActivityByCampaign(campaignId);
  }, [campaignId]);

  return (
    <div className="space-y-3">
      {activity.map((a) => (
        <div key={a.id} className="p-3 bg-white shadow rounded">
          <p className="font-semibold">{a.type}</p>
          <p className="text-gray-600">{a.message}</p>
          <p className="text-xs text-gray-400">{a.created_at}</p>
        </div>
      ))}
    </div>
  );
}