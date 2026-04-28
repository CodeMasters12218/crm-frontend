export default function ContactsTable({ data, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white shadow rounded overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left p-3 text-sm font-semibold">Nombre</th>
          <th className="text-left p-3 text-sm font-semibold">Email</th>
          <th className="text-left p-3 text-sm font-semibold">Teléfono</th>
          <th className="text-left p-3 text-sm font-semibold">Rol</th>
          <th className="text-left p-3 text-sm font-semibold">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c) => (
          <tr key={c.id} className="border-t hover:bg-gray-50">
            <td className="p-3 text-sm">{c.name}</td>
            <td className="p-3 text-sm">{c.email}</td>
            <td className="p-3 text-sm">{c.phone}</td>
            <td className="p-3 text-sm">{c.role}</td>
            <td className="p-3 text-sm space-x-2">
              <button
                className="text-blue-600 text-sm"
                onClick={() => onEdit(c)}
              >
                Editar
              </button>
              <button
                className="text-red-600 text-sm"
                onClick={() => onDelete(c)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}