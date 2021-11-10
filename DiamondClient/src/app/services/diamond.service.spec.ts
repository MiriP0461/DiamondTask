import { TestBed } from '@angular/core/testing';

import { DiamondService } from './diamond.service';

describe('DiamondService', () => {
  let service: DiamondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiamondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
