import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BestBusinessItem } from 'src/app/shared/interfaces/best-business-item';


@Component({
  selector: 'app-block-best-business',
  templateUrl: './block-best-business.component.html',
  styleUrls: ['./block-best-business.component.scss']
})
export class BlockBestBusinessComponent implements OnInit {
  @Input() public items: BestBusinessItem[];
  @Output() businessType = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
    this.items.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }

      if (a.value > b.value) {
        return -1;
      }

      return 0;
    });
  }

  onGetRivalList($event: MouseEvent, code: string) {
    $event.preventDefault();

    this.businessType.emit(code);
  }
}
