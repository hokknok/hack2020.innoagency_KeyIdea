import { Component, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PeopleService } from '../../shared/services/people/people.service';
import { People } from '../../shared/interfaces/people';
import { MapPinItem } from 'src/app/shared/interfaces/map-pin-item';
import { Router } from '@angular/router';


@UntilDestroy()
@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnDestroy {
  public mapPinItems: MapPinItem[] = [
    {
      id: 1,
      name: 'item 1',
      map: [55.8077124955766, 37.843035477866]
    }
  ];

  constructor(
    private peopleService: PeopleService,
    private router: Router,
  ) { }


  // =========================================================================
  // --- Lifecycle Hooks -----------------------------------------------------
  // -------------------------------------------------------------------------

  public ngOnInit(): void {
    this.loadData()
  }


  public ngOnDestroy(): void {
  }


  // =========================================================================
  // --- Публичные и методы шаблона ------------------------------------------
  // -------------------------------------------------------------------------

  public onItemClick(event: MouseEvent, item: number) {
    event.preventDefault();
    event.stopPropagation();

    this.router
      .navigate([], { queryParams: { 'catalog-item': item }, queryParamsHandling: 'merge' })
      .then();
  }


  // =========================================================================
  // --- Вспомогательные методы ----------------------------------------------
  // -------------------------------------------------------------------------

  private loadData(): void {

  }


}
