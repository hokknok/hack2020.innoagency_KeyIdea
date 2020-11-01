import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { UtilsService } from '../utils/utils.service';
import { BackendQuery } from '../../interfaces/backend-query';
import { BackendResponse } from '../../interfaces/backend-response';
import { environment } from 'src/environments/environment';


declare global {
  interface Window {
    staticCacheList: string[];
  }
}

type BackendAction =
  | 'point.getList'
  | 'address.getData'
  | 'map.getHeatMap'
  | 'map.getRivalList'
  ;


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getData<T = BackendResponse>(action: BackendAction, options?: object|Partial<BackendQuery>): Observable<T> {
    const params = UtilsService.getHttpParams({
      action,
      ...options,
    });

    let endPoint = `${environment.apiUrl}/api/v1/`;

    if (window.staticCacheList && window.staticCacheList.indexOf(action) >= 0) {
      endPoint = `${environment.apiUrl}/api/v1/cache/${action}.json`;
      delete params.action;
      delete params.lang;
    }

    return this.httpClient.get<T>(endPoint, { params })
      .pipe(UtilsService.distinctPipeFn, UtilsService.copyPipeFn);
  }
}
