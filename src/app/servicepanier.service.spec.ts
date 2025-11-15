import { TestBed } from '@angular/core/testing';

import { ServicepanierService } from './servicepanier.service';

describe('ServicepanierService', () => {
  let service: ServicepanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
