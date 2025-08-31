// 괄호 분리
export function separateParentheses(cell: string) {
  return cell.split('(').map((str, index) => {
    if (!str.trim()) return '(없음)';
    return index === 0 ? str.trim() : `(${str.trim()}`;
  });
}
