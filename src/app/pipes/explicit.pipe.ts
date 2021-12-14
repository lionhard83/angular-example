import { Pipe, PipeTransform } from '@angular/core';
const words = ['fuck', 'shit']


@Pipe({
  name: 'explicit'
})
export class ExplicitPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {

    return words.reduce((acc, item) =>
      acc.replace(
        new RegExp(`(${item})`, 'gi'),
        item.split('').fill('*', args[0] !== undefined ? args[0] : 1, item.length - (args[1] !== undefined ? args[1] : 1)).join(''))
    , value);
  }

}
