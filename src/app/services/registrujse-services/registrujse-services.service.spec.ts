import { TestBed } from '@angular/core/testing';

import { RegistrujseServicesService } from './registrujse-services.service';

describe('RegistrujseServicesService', () => {
  let service: RegistrujseServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrujseServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
