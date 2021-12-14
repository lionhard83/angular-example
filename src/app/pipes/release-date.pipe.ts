import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseDate'
})
export class ReleaseDatePipe implements PipeTransform {

  transform(value: string): string {
    const [year, month, day] = (value.split('T')[0]).split('-');
    return `${day}/${month}/${year}`;
  }

}
