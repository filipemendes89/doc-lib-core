import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvergenciaComponent } from './convergencia.component';

describe('ConvergenciaComponent', () => {
  let component: ConvergenciaComponent;
  let fixture: ComponentFixture<ConvergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvergenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
