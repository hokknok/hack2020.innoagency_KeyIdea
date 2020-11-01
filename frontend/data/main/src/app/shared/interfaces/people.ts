export interface People {
  id: number;
  customersCntTotalSum: number;
  customersCntLongSum: number;
  customersCntWorkSum: number;
  customersCntLocSum: number;
  map: {
    lon: number,
    lat: number,
  };
}
