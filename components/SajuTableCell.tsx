import { cn } from '@/utils/cn';
import { separateParentheses } from '@/utils/separateParentheses';

export function SajuTableCell({
  cell,
  className,
}: {
  className?: string;
  cell: string | React.ReactNode | string[];
}) {
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

  if (typeof cell === 'string') {
    return separateParentheses(cell).map((str, index) => (
      <p
        key={`${cell}-${index}`}
        className={cn(
          'text-center text-xs font-normal',
          index === 0 && 'font-bold text-sm',
          className
        )}
      >
        {str}
      </p>
    ));
  }
  return cell;
}
