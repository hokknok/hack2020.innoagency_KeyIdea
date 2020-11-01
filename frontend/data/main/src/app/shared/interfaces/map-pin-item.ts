export interface MapPinItem {
  id: number;
  map: [number, number];
  name: string;
  text?: string;
  hint?: string;

  pinSrcDefault?: string;
  pinSrcActive?: string;

  pinSize?: [number, number];
}
