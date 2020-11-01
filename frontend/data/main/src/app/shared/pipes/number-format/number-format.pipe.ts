import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


declare global {
  interface Window {
    MSStream?: any;
  }
}

@Pipe({name: 'numberFormat'})
export class NumberFormatPipe implements PipeTransform {
  public divider: string;
  protected regexp: RegExp = /\B(?=(\d{3})+(?!\d))/g;
  private useRuleTenThousand = true;


  constructor(
    private domSanitizer: DomSanitizer,
  ) {
    this.divider = NumberFormatPipe.getNumberDivider();
  }


  public static getNumberDivider(): string {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return iOS ? '&nbsp;' : '&thinsp;';
  }


  public getInputFormatted(input: number, precision: number = 100): SafeHtml {
    let inputStr = (Math.round(input * precision) / precision).toString();

    if (input < 0) {
      inputStr = inputStr.replace(/-/, '&minus;' + this.divider);
    }

    return Math.abs(input) >= 10000 || !this.useRuleTenThousand
      ? inputStr.replace(this.regexp, this.divider)
      : inputStr;
  }


  public transform(
    input: number|string,
    unitIn = '',
    unitContainer = false,
    useRuleTenThousand = true,
  ): SafeHtml {
    this.useRuleTenThousand = useRuleTenThousand;

    const inputNumber = (+input).toString().length === input.toString().length
      ? +input : input;

    if (typeof inputNumber === 'number') {
      let unit = '';
      if (unitIn !== null) {
        unit = (unitIn) ? this.divider + unitIn : this.divider;
      }

      if (unitContainer) {
        unit = '<span>' + unit + '</span>';
      }

      const inputFormatted = this.getInputFormatted(inputNumber) + unit;
      const result = ('<nobr>' + inputFormatted + '</nobr>').replace('.', ',');

      return this.domSanitizer.bypassSecurityTrustHtml(result);

    } else {
      return input;
    }
  }

}
