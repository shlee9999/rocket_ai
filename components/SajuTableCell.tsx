import { Cell, Color } from '@/types/SajuTable';
import { cn } from '@/utils/cn';

interface SajuTableCellProps {
  className?: string;
  cell: Cell | Cell[];
  variant?: 'normal' | 'visual';
  color?: Color;
}
// 2F2F2F, C23030,  18868C
export function SajuTableCell({
  cell,
  className,
  variant = 'normal',
  color = 'black',
}: SajuTableCellProps) {
  //* 배열 처리
  if (Array.isArray(cell)) {
    return (
      <div className={cn('flex flex-col gap-1', className)}>
        {cell.map((item, index) => (
          <SajuTableCell key={`array-${index}`} cell={item} variant={variant} />
        ))}
      </div>
    );
  }

  //* 없음 처리
  if (!cell.chinese && !cell.korean) {
    return <p className='text-center text-xs font-normal'>없음</p>;
  }

  if (variant === 'visual') {
    return (
      <div
        className={cn(
          'relative rounded-lg flex flex-col items-center text-[#F9FBFE] w-[38px] m-auto',
          color === 'black' && 'bg-[#2F2F2F]',
          color === 'red' && 'bg-[#C23030]',
          color === 'blueGreen' && 'bg-[#18868C]'
        )}
        style={{
          aspectRatio: 1,
          padding: '0.1rem',
        }}
      >
        <p className='text-[0.3rem] '>임</p>
        <p className='text-sm'>星</p>
        <p className='text-[0.3rem]'>星星</p>
      </div>
    );
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
