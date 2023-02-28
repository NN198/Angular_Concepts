import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    
    let [date, month, year] = value.split('/');
    // console.log(year);

    let rec = new Date();
    let currentDate = rec.getFullYear();
    // console.log(currentDate);
    
    return currentDate - Number(year);
  }

}
