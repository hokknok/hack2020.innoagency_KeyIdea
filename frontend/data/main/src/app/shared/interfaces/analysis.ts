import { MapPinItem } from './map-pin-item';
import { BestBusinessItem } from './best-business-item';
import { NearestMetro } from './nearest-metro';


export interface Analysis {
  socDem: {
    sex: AnalysisItem[];
    age: AnalysisItem[];
    soc: AnalysisItem[];
  };
  bestBusiness: {
    businesses: BestBusinessItem[]
  };
  transport: NearestMetro[];
  address: MapPinItem;
}

interface AnalysisItem {
  code?: string;
  name: string;
  value: number;
}

interface AnalysisItem {
  color?: string;
  name: string;
  count: number;
  dist: number;
}

