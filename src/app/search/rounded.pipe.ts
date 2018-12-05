import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounded'
})
export class RoundedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let exp;
    const suffixes = ['k', 'M', 'G'];

    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    }

    exp = Math.floor(Math.log(value) / Math.log(1000));

    const val = (value / Math.pow(1000, exp)).toFixed(1);
    if (val.toString().indexOf('.0') >= 0) {
      return (value / Math.pow(1000, exp)).toFixed(0) + suffixes[exp - 1];
    } else {
      return val + suffixes[exp - 1];
    }

  }

}
