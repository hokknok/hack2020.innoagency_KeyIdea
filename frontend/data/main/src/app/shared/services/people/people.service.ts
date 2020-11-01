import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { People } from '../../interfaces/people';
import { UtilsService } from '../utils/utils.service';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private httpClient: HttpClient,
  ) {}


  public getItems(): Observable<People[]> {

    const params = UtilsService.getHttpParams({
      action: 'people.getList'
    });

    return this.httpClient
      .get<People[]>('/api/v1/', { params });
  }
}
