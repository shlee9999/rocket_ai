export type Variant = 'normal' | 'visual';
export type Color = 'black' | 'red' | 'blueGreen' | 'white';
export type Cell = {
  chinese?: string;
  subChinese?: string;
  korean?: string;
  className?: string;
  color?: Color;
  variant?: Variant;
};
export type Row = {
  rowHeader: Cell;
  values: (Cell | Cell[])[];
};
