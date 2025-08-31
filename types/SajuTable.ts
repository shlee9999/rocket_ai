export type Variant = 'normal' | 'visual';
export type Color = 'black' | 'red' | 'blueGreen' | 'white';
export type Cell = {
  chinese?: string;
  subChinese?: string;
  korean?: string;
  classNameChinese?: string;
  color?: Color;
  variant?: Variant;
  classNameKorean?: string;
  classNameSubChinese?: string;
};
export type Row = {
  rowHeader: Cell;
  values: (Cell | Cell[])[];
};
