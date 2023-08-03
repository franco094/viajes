import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiowebComponent } from './sitioweb.component';

describe('SitiowebComponent', () => {
  let component: SitiowebComponent;
  let fixture: ComponentFixture<SitiowebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitiowebComponent]
    });
    fixture = TestBed.createComponent(SitiowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
