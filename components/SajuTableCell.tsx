import { Cell } from '@/components/SajuTable';
import { cn } from '@/utils/cn';

interface SajuTableCellProps {
  className?: string;
  cell: Cell | Cell[];
}
export function SajuTableCell({ cell, className }: SajuTableCellProps) {
  //* 배열 처리
  if (Array.isArray(cell)) {
    return (
      <div className={cn('flex flex-col gap-1', className)}>
        {cell.map((item, index) => (
          <SajuTableCell key={`array-${index}`} cell={item} />
        ))}
      </div>
    );
  }

  //* 없음 처리
  if (!cell.chinese && !cell.korean) {
    return <p className='text-center text-xs font-normal'>없음</p>;
  }

  return (
    <div>
      <p
        key={`${cell.chinese}-${cell.korean}`}
        className={cn('text-center font-bold text-sm', className)}
      >
        {cell.chinese}
      </p>
      <p className='text-center text-xs font-normal'>({cell.korean})</p>
    </div>
  );
}
