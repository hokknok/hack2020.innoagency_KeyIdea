import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals/modals.service';
import { map, filter } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Input } from '@angular/core';
import { ModalCode, ModalItem } from '../../interfaces/modal-item';
import { Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@UntilDestroy()
@Component({
  selector: 'app-popup-default',
  templateUrl: './popup-default.component.html',
  styleUrls: ['./popup-default.component.scss']
})
export class PopupDefaultComponent implements OnInit, OnDestroy {
  @Input() public dataLoaded: boolean;
  @Input() public popupCode: ModalCode;
  @Output() public afterInit = new EventEmitter<ModalItem>();
  @ViewChild('popupScrollWrapperRef', {static: true}) public popupScrollWrapperRef: ElementRef<HTMLElement>;


  constructor(
    private modalsService: ModalsService,
  ) { }

  public ngOnInit(): void {
    this.modalsService.getEvent().pipe(
      map(modals => modals.find(x => x.code === this.popupCode)),
      filter(x => !!x),
      untilDestroyed(this)
    ).subscribe(modal => this.afterInit.emit(modal));
  }


  public ngOnDestroy(): void {
  }


  public close(): void {
    this.modalsService.close(this.popupCode);
  }

}
