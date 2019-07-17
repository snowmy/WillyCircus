import { TestBed } from '@angular/core/testing';

import { SpectaclesService } from './spectacles.service';

describe('SpectaclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpectaclesService = TestBed.get(SpectaclesService);
    expect(service).toBeTruthy();
  });
});
