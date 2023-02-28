import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'percent'
})

export class PercentPipe implements PipeTransform{
    
    transform(value: any, ...args: any[]) {
        var [x] = args;
        console.log("values" +value)
        return (value/x)*100;
    }
    
}