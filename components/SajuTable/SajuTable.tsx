import { SajuTableCell } from '@/components/SajuTable/SajuTableCell';
import { Row } from '@/types/SajuTable';
import { cn } from '@/utils/cn';
import { pxu } from '@/utils/pxu';

interface SajuTableProps {
  columns: string[];
  data: Row[];
}

export default function SajuTable({ columns, data }: SajuTableProps) {
  return (
    <table
      className="w-full border-collapse focus-visible:outline-2 focus-visible:outline-blue-500"
      tabIndex={0}
      style={{
        marginTop: pxu(20),
        marginBottom: pxu(32),
      }}
    >
      <caption className="sr-only">사주 정보 테이블</caption>
      <thead>
        <tr>
          <th className="border-r-2 border-r-black">
            <span className="sr-only">항목</span>
          </th>
          {columns.map((c, colIndex) => (
            <th
              key={c}
              scope="col"
              id={`col-${colIndex}`}
              className="border-r border-r-border-light [&:last-child]:border-r-2 [&:last-child]:border-r-black text-lg"
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
            <th scope="row" id={`row-${rowIndex}`} className="border-r-2 border-r-black">
              <SajuTableCell
                cell={{
                  classNameChinese: cn('text-2xs', row.rowHeader.classNameChinese),
                  classNameKorean: cn('text-4xs', row.rowHeader.classNameKorean),
                  ...row.rowHeader,
                }}
              />
            </th>
            {row.values.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                headers={`row-${rowIndex} col-${cellIndex}`}
                className="bg-tertiary-bg p-[5px] border border-border-light [&:last-child]:border-r-2 [&:last-child]:border-r-black"
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
