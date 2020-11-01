import { Component, OnInit } from '@angular/core';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  public menu: Link[] = [
    {
      text: 'Главная',
      path: '/',
    },
    {
      text: 'Анализ места',
      path: '/analysis',
    },
  ];


  constructor() { }


  public ngOnInit(): void {
  }

}
