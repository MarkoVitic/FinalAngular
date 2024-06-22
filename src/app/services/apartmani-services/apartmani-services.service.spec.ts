import { TestBed } from '@angular/core/testing';

import { ApartmaniServicesService } from './apartmani-services.service';

describe('ApartmaniServicesService', () => {
  let service: ApartmaniServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmaniServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
