import { TestBed } from '@angular/core/testing';

import { ObjektiServicesService } from './objekti-services.service';

describe('ObjektiServicesService', () => {
  let service: ObjektiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjektiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
