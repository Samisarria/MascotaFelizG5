import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrarMascotaComponent } from './regitrar-mascota.component';

describe('RegitrarMascotaComponent', () => {
  let component: RegitrarMascotaComponent;
  let fixture: ComponentFixture<RegitrarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitrarMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
