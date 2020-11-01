import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { NumberFormatPipe } from './number-format.pipe';


describe('NumberFormatPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
      ],
    });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new NumberFormatPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
