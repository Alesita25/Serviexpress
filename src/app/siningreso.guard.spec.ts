import { TestBed } from '@angular/core/testing';

import { SiningresoGuard } from './siningreso.guard';

describe('SiningresoGuard', () => {
  let guard: SiningresoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SiningresoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
