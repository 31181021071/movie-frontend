import { TestBed } from '@angular/core/testing';

import { MovieManagementDetailService } from './movie-management-detail.service';

describe('MovieManagementDetailService', () => {
  let service: MovieManagementDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieManagementDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
