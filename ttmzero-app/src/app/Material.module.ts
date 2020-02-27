import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    imports: [
        MatTableModule,
        MatTooltipModule,
        MatInputModule,
        MatRippleModule,
        MatSortModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        MatTooltipModule,
        MatInputModule,
        MatRippleModule,
        MatSortModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatIconModule

    ],
  })
  export class MaterialModule { }