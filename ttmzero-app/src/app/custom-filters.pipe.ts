import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilters'
})
export class CustomFiltersPipe implements PipeTransform {
  private searchKeyword: string = "";
  private Result = [];

  transform(items: any[], searchText: string): any {
    if (this.isObjNull(items)) {
       return [-1];
    }
    if (this.isObjNull(searchText)) {
      return items;
    }
    this.searchKeyword = searchText.toLowerCase();
    
    this.Result = items.filter(o => this.checkAgainstProperty(o));
    if (this.Result.length === 0) {
        return [-1];
    }
    return this.Result;
    
  }

  private checkAgainstProperty(property: any): boolean {
    let value: boolean = false;

    if ( !this.isNullOrWhiteSpace(property.name) || !this.isNullOrWhiteSpace(property.description)) {
        if ((property.name.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >= 0) ||
            (property.description.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >= 0)) {
            value = true;
        }
    }

    return value;
}

public isObjNull(obj: any, isNumber = false): boolean {
    let value: boolean = true;

    if (!isNumber && obj && obj != undefined && obj != null)
        value = false;
    else if (isNumber && obj != undefined && obj != null)
        value = false;

    return value;
}

public isNullOrWhiteSpace(obj: string): boolean {
    let value: boolean = true;

    if (!this.isObjNull(obj) && obj.trim() != "")
        value = false;

    return value;
}

}
