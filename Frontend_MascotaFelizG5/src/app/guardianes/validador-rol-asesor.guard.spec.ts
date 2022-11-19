import { TestBed } from '@angular/core/testing';

import { ValidadorRolAsesorGuard } from './validador-rol-asesor.guard';

describe('ValidadorRolAsesorGuard', () => {
  let guard: ValidadorRolAsesorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorRolAsesorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
