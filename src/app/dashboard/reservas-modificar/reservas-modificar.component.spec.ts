import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasModificarComponent } from './reservas-modificar.component';

describe('ReservasModificarComponent', () => {
  let component: ReservasModificarComponent;
  let fixture: ComponentFixture<ReservasModificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasModificarComponent]
    });
    fixture = TestBed.createComponent(ReservasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
