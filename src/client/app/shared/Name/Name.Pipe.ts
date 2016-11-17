import {PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'person'
})
export class PersonPipe implements PipeTransform {
    transform(value:person,...args: any[]): any {
        return value > 
    }
}