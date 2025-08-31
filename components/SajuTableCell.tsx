import { Cell } from '@/types/SajuTable';
import { cn } from '@/utils/cn';

interface SajuTableCellProps {
  cell: Cell | Cell[];
}

// 2F2F2F, C23030,  18868C
export function SajuTableCell({ cell }: SajuTableCellProps) {
  //* 배열 처리
  if (Array.isArray(cell)) {
    return (
      <div className={cn('flex flex-col gap-1')}>
        {cell.map((item, index) => (
          <SajuTableCell key={`array-${index}`} cell={item} />
        ))}
      </div>
    );
  }

  //* 없음 처리
  if (!cell.chinese && !cell.korean) {
    return <p className='text-center font-size-3xs font-normal'>(없음)</p>;
  }

  if (cell.variant === 'visual') {
    return (
      <div
        className={cn(
          'relative rounded-[20%] flex flex-col justify-between items-center text-[#F9FBFE] m-auto',
          cell.color === 'black' && 'bg-[#2F2F2F] ',
          cell.color === 'red' && 'bg-[#C23030]',
          cell.color === 'blueGreen' && 'bg-[#18868C]',
          cell.color === 'white' &&
            'bg-[#F9FBFE] text-[#2F2F2F] border border-[#2F2F2F]'
        )}
        style={{
          aspectRatio: 1,
          padding: 'clamp(0px, 1.5vw, 0.15rem)',
          width: 'clamp(0px, 10vw, 45px)',
        }}
      >
        <p style={{ lineHeight: 1 }} className={cn('font-size-4xs')}>
          임
        </p>
        <p
          style={{ lineHeight: 1 }}
          className={cn('font-size-base font-semibold')}
        >
          星
        </p>
        <p style={{ lineHeight: 1 }} className={cn('font-size-4xs')}>
          星星
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className={cn('text-center font-bold font-size-sm', cell.className)}>
        {cell.chinese}
      </p>
      <p className='text-center text-xs font-bold font-size-3xs'>
        ({cell.korean})
      </p>
    </div>
  );
}
