import React from "react";

// Export TableColumn as a **type**
export type TableColumn<T> = {
  header: string;
  accessor: keyof T | string;
  render?: (row: T) => React.ReactNode;
};

// Table props
interface TableProps<T> {
  columns: TableColumn<T>[]; // use type here
  data: T[];
  className?: string;
}

// Table component
export function Table<T>({ columns, data, className }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className || ""}`}>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="text-left px-4 py-2 border-b border-gray-300"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-gray-200"
                >
                  {col.render ? col.render(row) : (row as any)[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
