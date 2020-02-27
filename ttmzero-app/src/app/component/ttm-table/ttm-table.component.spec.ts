import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtmTableComponent } from './ttm-table.component';
import { TtmZeroService } from 'src/app/services/ttm-zero.service';
import { TtmPagerService } from 'src/app/services/ttm-pager.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../Material.module';
import { CustomFiltersPipe } from 'src/app/custom-filters.pipe';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
class MockService extends TtmZeroService {
  getTtmJson(): Observable<any> {
    return;
  }

}
describe('TtmTableComponent', () => {
  let component: TtmTableComponent;
  let fixture: ComponentFixture<TtmTableComponent>;
  let ttmZeroService: TtmZeroService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TtmTableComponent, CustomFiltersPipe ],
      providers: [ TtmZeroService, TtmPagerService],
      imports: [CommonModule,FormsModule, BrowserModule, MaterialModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TtmTableComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    ttmZeroService = debugElement.injector.get(TtmZeroService);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TtmTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('shoudl call the ngOnInit method', () => {
    
    const app = fixture.componentInstance;
    fixture.detectChanges();
    var spy = spyOn(app, 'ngOnInit').and.callThrough();
    app.ngOnInit();
   
    expect(spy).toHaveBeenCalled();
    
  });

  it('should be able to assign object', () => {
    const app = fixture.componentInstance;
    const mockData =  {
      headline: 'testing',
      tableData: [{
        id: 0,
        name: "Name of 0",
        description: "This is some description.",
        date: 1518531970088
        }]
       
    }
    app.jsonData = mockData;
    expect(app.jsonData).toEqual(mockData);
  })

  it('should call the setPage method', () => {
    const app = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(app, 'setPage');
    app.setPage(1);
    expect(app.setPage).toHaveBeenCalledWith(1);
  });
  it('shoudl call the sortHeaderClick method', () => {
    const app = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(app, 'sortHeaderClick');
    app.sortHeaderClick('name');
    expect(app.sortHeaderClick).toHaveBeenCalled();
  });

});
