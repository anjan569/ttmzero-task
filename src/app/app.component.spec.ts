import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TtmTableComponent } from './component/ttm-table/ttm-table.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './Material.module';
import { CustomFiltersPipe } from './custom-filters.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        TtmTableComponent,
        CustomFiltersPipe
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
