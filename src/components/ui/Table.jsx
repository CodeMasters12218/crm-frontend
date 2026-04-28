export default function Table({ columns, data }) {
  return (
    <table className="w-full bg-white shadow rounded overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="text-left p-3 text-sm font-semibold">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-t hover:bg-gray-50 cursor-pointer">
            {columns.map((col) => (
              <td key={col.key} className="p-3 text-sm">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}