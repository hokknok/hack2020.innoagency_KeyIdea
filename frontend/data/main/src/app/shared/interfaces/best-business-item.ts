export interface BestBusinessItem {
  code?: string;
  name: string;
  value?: number;
  percent?: number;
  countObject: {
    value: number;
    percent: number;
  };
  allObject: {
    value: number;
    percent: number;
  };
  countPeople: {
    value: number;
    percent: number;
  };
  averagePeople: {
    value: number;
    percent: number;
  };
  differencePeople: {
    value: string;
    percent: number;
    color?: string;
  };
}

/*
'countObject' => [
  'value' => 64,
  'percent' => 40
],
'allObject' => [
  'value' => 5700,
  'percent' => 46
],
'countPeople' => [
  'value' => 56859,
  'percent' => 74
],
'averagePeople' => [
  'value' => 76451,
  'percent' => 95
],
'differencePeople' => [
  'value' => '-40%',
  'percent' => 40,
  'color' => 'red',
],*/
