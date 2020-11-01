import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @ViewChild("chart") chart: ChartComponent;
  @Input() public series: number[];
  @Input() public colors: string[];
  @Input() public labels: string[];

  public chartOptions: Partial<ChartOptions>;

  constructor() {
  }

  public ngOnInit(): void {
    this.buildChart();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('series' in changes) {
      this.buildChart();
    }
  }

  private buildChart(): void {
    this.chartOptions = {
      series: this.series,
      colors: this.colors,
      labels: this.labels,
      chart: { width: "100%", type: "donut" },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500
            }
          }
        }
      ]
    };
  }

  public updateSeries() {
    // console.log('updateSeries');
  }

  /*private initSexChart(): void {
    this.showSexChart = true;

    this.chartOptions.labels = ["Female", "Male"];
    this.chartOptions.colors = ['#DF4C4A', '#80BD00'];
    this.chartOptions.series = [18076, 9785];
  }


  private initAgeChart(): void {
    this.showAgeChart = true;

    this.chartOptions.labels = ['<7', '7-18', '18-25', '25-45', '45-60', '60-75', '75-90'];
    // this.chartOptions.colors = ['#DF4C4A', '#80BD00'];
    this.chartOptions.series = [280, 2261, 642, 2532, 3952, 13175, 4517, 502];
  }*/

// {'f': 18076, 'm': 9785,
// 'house_district_total': 27861,
// '<7': 280, '7-18': 2261, '18-25': 642, '25-45': 2532, '45-60': 3952, '60-75': 13175, '75-90': 4517, '90<': 502,
// 'age_class_total': 27861,
// 'Многодетные': 2642, 'Беременность': 365, 'Инвалид': 5144, 'Малоимущие': 833, 'Пенсионер': 12507, 'Ветеран труда': 5383, 'Дети инвалиды': 332, 'Молодые родители': 655,
// 'person_exemption_group_total': 27861}
}
