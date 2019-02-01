import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter',
  pure: false
})
export class CustomfilterPipe implements PipeTransform {

   transform(employees: any, term: any): any {
        if(term == null) return employees;

        return employees.filter(function(employee){
          return employee.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
      }

}
