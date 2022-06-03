import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number
  {
    console.log("tranform() of SquarePipe called "+ value)
    console.log(typeof(value))

    return value*value
  }

}
