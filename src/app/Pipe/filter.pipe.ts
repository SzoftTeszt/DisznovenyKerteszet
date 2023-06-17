import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, phrase:string): any {

    console.log("value",value, "keresés", phrase)
    if (!phrase) return value;
    return value.filter((ertek:any)=>{
      console.log(ertek.megrendelo)
      if (ertek.megrendelo.toLowerCase().indexOf(phrase.toLowerCase()) !=-1)
        return true;
      return false;
    })
   
  }

}
