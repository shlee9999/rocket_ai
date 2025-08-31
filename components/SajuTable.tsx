import { SajuTableCell } from '@/components/SajuTableCell';

type Row = {
  rowHeader: string;
  values: (string | string[])[];
};

interface SajuTableProps {
  columns: string[];
  data: Row[];
}

export default function SajuTable({ columns, data }: SajuTableProps) {
  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr>
          <th />
          {columns.map((c) => (
            <th key={c} scope='col'>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.rowHeader}>
            <th scope='row'>
              <SajuTableCell cell={row.rowHeader} />
            </th>
            {row.values.map((cell, cellIndex) => (
              <td key={`${row.rowHeader}-${cellIndex}`}>
                <SajuTableCell cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
