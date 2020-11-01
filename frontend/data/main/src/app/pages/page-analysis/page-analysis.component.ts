import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../../shared/services/backend/backend.service';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MapPinItem } from '../../shared/interfaces/map-pin-item';
import { BestBusinessItem } from 'src/app/shared/interfaces/best-business-item';
import { Analysis } from '../../shared/interfaces/analysis';
import { RivalItem } from '../../shared/interfaces/rival-item';
import { MapPointItem } from '../../shared/interfaces/map-point-item';
import { NearestMetro } from '../../shared/interfaces/nearest-metro';


@UntilDestroy()
@Component({
  selector: 'app-page-analysis',
  templateUrl: './page-analysis.component.html',
  styleUrls: ['./page-analysis.component.scss']
})
export class PageAnalysisComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public data: Analysis;
  public currentPoint: MapPinItem;
  public rivalList: RivalItem[];
  public heatMapData: MapPointItem[];
  public bestBusiness: BestBusinessItem[] = [];
  public nearestMetro: NearestMetro[] = [];
  public defaultAddress = 'Дубнинская улица, дом 31';
  public pieData = {
    sex: {
      labels: [],
      series: [],
      colors: [],
    },
    age: {
      labels: [],
      series: [],
      colors: [],
    },
    soc: {
      labels: [],
      series: [],
      colors: [],
    },
  };


  constructor(
    private backendService: BackendService,
  ) { }


  public ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormControl('', Validators.required)
    });
  }


  public ngOnDestroy(): void {
  }

  public submit() {
    const formData = {...this.form.value};

    if (formData.address) {
      this.getData(formData.address);
    }
  }


  public getRivalList(code: string) {
    const loadRivalList = this.backendService.getData<RivalItem[]>('map.getRivalList', { 'business_type': code });
    combineLatest([loadRivalList])
      .pipe(untilDestroyed(this))
      .subscribe(([rivalList]) => {
        this.rivalList = rivalList;
      });
  }


  public onInsertAddress() {
    this.form.patchValue({
      address: this.defaultAddress
    });
    // console.log(this.defaultAddress);
    // this.form.
  }



  private getData(address: string): void {
    const loadAddressData = this.backendService.getData<Analysis>('address.getData', { address });
    const loadHeatMapData = this.backendService.getData<MapPointItem[]>('map.getHeatMap');
    combineLatest([loadAddressData, loadHeatMapData])
      .pipe(untilDestroyed(this))
      .subscribe(([addressData, heatMapData]) => {
        this.data = addressData;
        this.heatMapData = heatMapData;

        this.getSexData();
        this.getAgeData();
        this.getSocData();
        this.getNearestMetro();
      });
  }


  private getNearestMetro(): void {

    const countItems = this.data.transport.map(item => item.count);
    const maxCount = Math.max(...countItems);

    const distItems = this.data.transport.map(item => item.dist);
    const maxDist = Math.max(...distItems);

    this.nearestMetro = this.data.transport.map(item => {
      return {
        color: item.color,
        name: item.name,
        count: item.count,
        dist: Math.round(item.dist * 1000),
        percentCount: Math.round(item.count * 100 / maxCount),
        percentDist: Math.round(item.dist * 100 / maxDist),
      };
    });

    console.log(this.nearestMetro);
  }


  private getSocData(): void {
    this.pieData.soc.labels = this.getLabels(this.data.socDem.soc);
    this.pieData.soc.series = this.getSeries(this.data.socDem.soc);
  }


  private getAgeData(): void {
    this.pieData.age.labels = this.getLabels(this.data.socDem.age);
    this.pieData.age.series = this.getSeries(this.data.socDem.age);
  }


  private getSexData(): void {
    // this.pieData.sex.labels = this.getLabels(this.data.socDem.sex);
    this.pieData.sex.labels = this.data.socDem.sex.map(item => {
      return item.name + ' (' + item.value + ')';
    });
    this.pieData.sex.series = this.getSeries(this.data.socDem.sex);
  }


  private getLabels(data): string[] {
    return data.map(item => {
      return item.name;
    });
  }


  private getSeries(data): number[] {
    return data.map(item => {
      return item.value;
    });
  }

}
