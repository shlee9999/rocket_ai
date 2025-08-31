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
          'relative rounded-[20%] flex flex-col justify-between items-center text-saju-white m-auto',
          cell.color === 'black' && 'bg-saju-black',
          cell.color === 'red' && 'bg-saju-red',
          cell.color === 'blueGreen' && 'bg-saju-blue-green',
          cell.color === 'white' &&
            'bg-saju-white text-saju-black border border-saju-black'
        )}
        style={{
          aspectRatio: 1,
          padding: 'clamp(0px, 1.5vw, 0.15rem)',
          width: 'clamp(0px, 10vw, 45px)',
        }}
      >
        <p style={{ lineHeight: 1 }} className={cn('font-size-4xs')}>
          {cell.korean}
        </p>
        <p
          style={{ lineHeight: 1 }}
          className={cn('font-size-base font-semibold')}
        >
          {cell.chinese}
        </p>
        <p style={{ lineHeight: 1 }} className={cn('font-size-4xs')}>
          {cell.subChinese}
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
