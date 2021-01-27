import { TestBed, inject } from '@angular/core/testing';
import { TtmZeroService } from './ttm-zero.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('TtmZeroService', () => {
  let service: TtmZeroService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule ],
      providers: [TtmZeroService]
    });
    service = TestBed.get(TtmZeroService); // Add this
  });
  it('should be created', () => {
    const service: TtmZeroService = TestBed.get(TtmZeroService);
    expect(service).toBeTruthy();
  });

  
  // it('should return an Observable<Array<any>>', () => {
  //   const mockData =  {
  //         headline: 'testing',
  //         tableData: [{
  //           id: 0,
  //           name: "Name of 0",
  //           description: "This is some description.",
  //           date: 1518531970088
  //           }]
  //     }

  //     let resp;
  //     service.getTtmJson().subscribe(response => {
  //       resp = response;
  //     });

  //     expect(resp).toEqual(mockData)
  // });
});
