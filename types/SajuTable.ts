export type Variant = 'normal' | 'visual';
export type Color = 'black' | 'red' | 'blueGreen';
export type Cell = {
  chinese?: string;
  korean?: string;
};
export type Row = {
  rowHeader: Cell;
  values: (Cell | Cell[])[];
  variant?: Variant;
  color?: Color;
};
