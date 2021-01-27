import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtmTableComponent } from './component/ttm-table/ttm-table.component';
import { TtmZeroService } from './services/ttm-zero.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.module';
import { TtmPagerService } from './services/ttm-pager.service';
import { CustomFiltersPipe } from './custom-filters.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TtmTableComponent,
    CustomFiltersPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
    TtmZeroService,
    TtmPagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
