import { TestBed } from '@angular/core/testing';

import { ValidadorRolAdminGuard } from './validador-rol-admin.guard';

describe('ValidadorRolAdminGuard', () => {
  let guard: ValidadorRolAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadorRolAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
