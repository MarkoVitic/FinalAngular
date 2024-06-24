import { TestBed } from '@angular/core/testing';

import { KontaktFormaService } from './kontakt-forma.service';

describe('KontaktFormaService', () => {
  let service: KontaktFormaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontaktFormaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
