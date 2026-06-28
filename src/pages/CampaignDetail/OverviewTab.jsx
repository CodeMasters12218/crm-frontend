export default function OverviewTab({ campaign }) {
  return (
    <div className="space-y-4">
      <p><strong>Estado:</strong> {campaign.status}</p>
      <p><strong>Inicio:</strong> {campaign.start_date || "—"}</p>
      <p><strong>Fin:</strong> {campaign.end_date || "—"}</p>

      <div>
        <strong>Descripción:</strong>
        <p className="mt-1 text-gray-700">
          {campaign.description || "Sin descripción"}
        </p>
      </div>
    </div>
  );
}