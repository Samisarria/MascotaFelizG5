import { TestBed } from '@angular/core/testing';

import { ProductoserviciosService } from './productoservicios.service';

describe('ProductoserviciosService', () => {
  let service: ProductoserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
