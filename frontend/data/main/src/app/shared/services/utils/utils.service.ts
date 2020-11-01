import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { BackendQuery } from '../../interfaces/backend-query';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static readonly copyPipeFn = map(data => JSON.parse(JSON.stringify(data)));
  public static readonly distinctPipeFn = distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));


  constructor() {}


  /**
   * Метод возвращает строку, которая может быть ID HTML-элемента
   */
  public static getRandomElementId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    text += (Math.random() * 100000).toFixed();

    return text;
  }


  public static copy<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }


  public static getHttpParams(subject: BackendQuery): { [name: string]: string | string[] } {
    const params: { [name: string]: string | string[] } = {};

    Object.keys(subject).forEach(key => params[key] = subject[key].toString());

    return params;
  }


  public static downloadFile(src: string, name: string): void {
    const save = document.createElement('a');
    save.href = src;
    save.target = '_blank';
    save.download = name;
    if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search('Chrome') < 0) {
      // @ts-ignore
      document.location = save.href;

    } else {
      save.click();
      // tslint:disable-next-line:no-string-literal
      (window.URL || window['webkitURL']).revokeObjectURL(save.href);
    }
  }


  /** Метод подсчитывает высоту выпадающего списка */
  public static calculateMaxHeightList(list: HTMLElement): Partial<CSSStyleDeclaration> {
    const windowHeight = window.innerHeight;
    const selectElementRect = list.getBoundingClientRect();

    const maxHeightList = 450;
    const PADDING_BOTTOM = 25;
    const calculatedMaxHeightList = windowHeight - selectElementRect.top - PADDING_BOTTOM;

    if (calculatedMaxHeightList < maxHeightList) {
      return {
        maxHeight: `${calculatedMaxHeightList}px`,
      };
    } else {
      return {
        maxHeight: `${maxHeightList}px`,
      };
    }
  }
}
