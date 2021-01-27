import { TestBed } from '@angular/core/testing';

import { TtmPagerService } from './ttm-pager.service';

describe('TtmPagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TtmPagerService = TestBed.get(TtmPagerService);
    expect(service).toBeTruthy();
  });

 
});
