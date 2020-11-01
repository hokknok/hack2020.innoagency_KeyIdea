import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { PageTheme } from '../../interfaces/page-theme';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public pageAutoScrollTop = true;
  public readonly windowResize = new BehaviorSubject<boolean>(true);
  public readonly windowScroll = new BehaviorSubject<boolean>(true);


  private pageTheme = new BehaviorSubject<PageTheme>('default');

  constructor(
    private router: Router,
  ) {
  }


  public getPageTheme(): Observable<PageTheme> {
    return this.pageTheme.asObservable();
  }


  public setPageTheme(theme: PageTheme): void {
    this.pageTheme.next(theme);
  }


  /**
   * Метод открывает страницу 404 на месте текущего URL
   */
  public goTo404(): Promise<boolean> {
    return this.router.navigate(['/', '404'], {skipLocationChange: true});
  }
}
