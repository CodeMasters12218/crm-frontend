export default function Tabs({ tab, setTab }) {
  const tabs = [
    { key: "overview", label: "Resumen" },
    { key: "tasks", label: "Tareas" },
    { key: "contacts", label: "Contactos" },
    { key: "activity", label: "Actividad" },
  ];

  return (
    <div className="flex space-x-4 border-b pb-2">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setTab(t.key)}
          className={`pb-2 ${
            tab === t.key
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}