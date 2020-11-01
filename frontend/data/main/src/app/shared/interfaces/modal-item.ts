import { OverlayRef } from '@angular/cdk/overlay';


export type ModalCode = 'atlas-item' | string;

export interface ModalItem {
  code: ModalCode;
  overlayRef: OverlayRef;
  data: {
    [prop: string]: any,
  } | any;
}
