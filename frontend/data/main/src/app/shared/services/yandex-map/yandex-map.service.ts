import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YandexMapService {
  private readonly apiKey = '2db80c4c-704c-4382-906c-9dfe2e3baa8f';
  private readonly statusScriptLoad = new BehaviorSubject<any>(null);
  private readonly statusHeartMapScriptLoad = new BehaviorSubject<any>(null);


  constructor() { }


  public loadScript(render: Renderer2): Observable<any> {
    if (!this.statusScriptLoad.value) {
      const functionName = 'initYandexMap';

      window[functionName] = () => {
        const ymaps = window['ymaps'];
        if (ymaps) {
          this.statusScriptLoad.next(ymaps);
        }
      };

      const mapScript = render.createElement('script');
      mapScript.type = 'text/javascript';
      mapScript.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=${functionName}&apikey=${this.apiKey}`;

      document.head.appendChild(mapScript);
    }

    return this.statusScriptLoad.asObservable();
  }


  public loadHearMapScript(render: Renderer2): Observable<any> {
    if (!this.statusHeartMapScriptLoad.value) {
      this.statusHeartMapScriptLoad.next(true);

      const mapScript = render.createElement('script');
      mapScript.type = 'text/javascript';
      mapScript.src = 'https://yastatic.net/s3/mapsapi-jslibs/heatmap/0.0.1/heatmap.min.js';

      document.head.appendChild(mapScript);
    }

    return this.statusHeartMapScriptLoad.asObservable();
  }
}
