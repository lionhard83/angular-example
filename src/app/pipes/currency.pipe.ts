import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value?: number, ...args: unknown[]): unknown {

    return value ? `${value} €` : 'Sold out';
  }

}
