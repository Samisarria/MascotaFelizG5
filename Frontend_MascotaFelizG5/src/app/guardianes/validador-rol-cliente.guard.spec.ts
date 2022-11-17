import { TestBed } from '@angular/core/testing';

import { ValidadorRolClienteGuard } from './validador-rol-cliente.guard';

describe('ValidadorRolClienteGuard', () => {
  let guard: ValidadorRolClienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorRolClienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
