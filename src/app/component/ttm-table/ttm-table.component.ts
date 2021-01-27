import { Component, OnInit, ViewChild } from '@angular/core';
import { TtmZeroService } from 'src/app/services/ttm-zero.service';
import { TtmPagerService } from 'src/app/services/ttm-pager.service';
import { stringify } from 'querystring';

interface JsonData {
  headline: string;
  tableData: TableData[];
}

interface TableData {
  id: number;
  name: string;
  description: string;
  date: number;
}

@Component({
  selector: 'app-ttm-table',
  templateUrl: './ttm-table.component.html',
  styleUrls: ['./ttm-table.component.scss']
})
export class TtmTableComponent implements OnInit {
  
  constructor(private ttmService: TtmZeroService, private pagerService: TtmPagerService) { }
  jsonData: JsonData;
  displayColumns: string[];
  pager: any = {};
  pagedItems: any[];
  dataSource: any[];
  searchKeyword: string;
  sortBy: any;
  _isSorting: boolean;
  filterData: any[];
  public sortDirection: string = 'desc';
  ngOnInit() {
    
    this.ttmService.getTtmJson().subscribe(data => {
      this.jsonData = data;
      this.dataSource = this.jsonData.tableData;
      this.setPage(1);

      
    });
    
  }

  setPage(page: number) {
    this.pager =  this.pagerService.getPager(this.dataSource.length, page);

    this.pagedItems = this.dataSource.slice(this.pager.startIndex, this.pager.endIndex+1);
    this.displayColumns = Object.keys(this.pagedItems[0]);
  } 

  isSorting(name: string) {
    return this.sortBy !== name && name !== '';
  };
  
  isSortAsc(name: string) {
    var isSortAsc: boolean = this.sortBy === name && this.sortDirection === 'asc';
    return isSortAsc;
  };
  
  isSortDesc(name: string) {
    var isSortDesc: boolean = this.sortBy === name && this.sortDirection === 'desc';
    return isSortDesc;
  };

  sortHeaderClick(headerName: string) {
    if (headerName) {
      if (this.sortBy === headerName) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      }
      this.sortBy = headerName;
      // Get the matching column
      var column: any = this.displayColumns.filter((column) => column === this.sortBy)[0];
      var isNumeric: boolean = (column.filter && column.filter.indexOf("id") != -1) || (column.isNumeric === true);
      console.log(this.sortBy + ' ' + this.sortDirection);
      this.sort(this.dataSource, this.sortBy, this.sortDirection, isNumeric);
    }
  }

  sort(arr: Array<any>, fieldName: string, direction: string, isNumeric: boolean) {
    
    var sortFunc = function (field, rev) {
      return function (a, b) {
          a = pathValue(a, field);
          b = pathValue(b, field);
          return ((a < b) ? -1 : ((a > b) ? 1 : 0)) * (rev ? -1 : 1);
      }
    };

    // Have to handle deep paths
    var pathValue = function (obj, path) {
      for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
          obj = obj[path[i]];
      };
      return obj;
    };
    this._isSorting = true;
    arr.sort(sortFunc(fieldName, direction === 'desc'));
    this._isSorting = false;
    this.setPage(1);
  }
  

  

}
