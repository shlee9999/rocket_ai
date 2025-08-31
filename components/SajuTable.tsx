import { SajuTableCell } from '@/components/SajuTableCell';
import { Row } from '@/types/SajuTable';
import { cn } from '@/utils/cn';

interface SajuTableProps {
  columns: string[];
  data: Row[];
}

export default function SajuTable({ columns, data }: SajuTableProps) {
  return (
    <table
      className='w-full border-collapse'
      style={{
        marginTop: 'calc(20 * var(--u))',
        marginBottom: 'calc(32 * var(--u))',
      }}
    >
      <thead>
        <tr>
          <th className='border-r-2 border-r-black' />
          {columns.map((c) => (
            <th
              key={c}
              scope='col'
              className='border-r-1 border-r-border-light [&:last-child]:border-r-2 [&:last-child]:border-r-black font-size-lg'
              style={{
                lineHeight: 2,
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={cn(
              'border-t-2 border-t-black',
              rowIndex === 2 && 'border-t border-t-border-light',
              '[&:last-child]:border-b-2 [&:last-child]:border-b-black'
            )}
          >
            <th scope='row' className='border-r-2 border-r-black'>
              <SajuTableCell
                cell={{
                  classNameChinese: cn(
                    'font-size-2xs',
                    row.rowHeader.classNameChinese
                  ),
                  classNameKorean: cn(
                    'font-size-4xs',
                    row.rowHeader.classNameKorean
                  ),
                  ...row.rowHeader,
                }}
              />
            </th>
            {row.values.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className='bg-tertiary-bg p-[5px] border border-border-light [&:last-child]:border-r-2 [&:last-child]:border-r-black'
              >
                <SajuTableCell cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
