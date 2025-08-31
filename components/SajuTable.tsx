import { SajuTableCell } from '@/components/SajuTableCell';
import { figmaLayout } from '@/constants/layout';
import { Row } from '@/types/SajuTable';
import { getPercentage } from '@/utils/getPercentage';

interface SajuTableProps {
  columns: string[];
  data: Row[];
}

export default function SajuTable({ columns, data }: SajuTableProps) {
  return (
    <table
      className='w-full border-collapse'
      style={{
        marginTop: getPercentage(20, figmaLayout.sajuTableHeight),
        marginBottom: getPercentage(32, figmaLayout.sajuTableHeight),
      }}
    >
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
              <SajuTableCell {...row.rowHeader} />
            </th>
            {row.values.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className='bg-[#F9FBFE] p-[5px] border border-[#D9D9D9]'
              >
                <SajuTableCell {...cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
