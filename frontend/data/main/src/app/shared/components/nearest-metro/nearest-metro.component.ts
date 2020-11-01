import { Component, Input, OnInit } from '@angular/core';
import { NearestMetro } from '../../interfaces/nearest-metro';

@Component({
  selector: 'app-nearest-metro',
  templateUrl: './nearest-metro.component.html',
  styleUrls: ['./nearest-metro.component.scss']
})
export class NearestMetroComponent implements OnInit {
  @Input() public items:NearestMetro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
