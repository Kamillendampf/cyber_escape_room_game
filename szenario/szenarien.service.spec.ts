import { TestBed } from '@angular/core/testing';

import { SzenarienService } from './szenarien.service';

describe('SzenarienService', () => {
  let service: SzenarienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzenarienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
