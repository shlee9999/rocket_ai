import { SajuTableCell } from '@/components/SajuTableCell';

export type Row = { rowHeader: Cell; values: (Cell | Cell[])[] };

export type Cell = {
  chinese?: string;
  korean?: string;
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
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th scope='row'>
              <SajuTableCell cell={row.rowHeader} />
            </th>
            {row.values.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <SajuTableCell cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
