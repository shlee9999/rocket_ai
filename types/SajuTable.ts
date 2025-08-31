export type Variant = 'normal' | 'visual';
export type Color = 'black' | 'red' | 'blueGreen' | 'white';
export type Cell = {
  chinese?: string;
  korean?: string;
  className?: string;
  variant?: Variant;
  color?: Color;
};
export type Row = {
  rowHeader: Cell;
  values: (Cell | Cell[])[];
};
