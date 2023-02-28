import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestr'
})
export class ReversestrPipe implements PipeTransform {

  str:string
  transform(value: any, ...args: any[]): any {
    
    this.str = value.split('').reverse().join('');
    return this.str;
  }

}
