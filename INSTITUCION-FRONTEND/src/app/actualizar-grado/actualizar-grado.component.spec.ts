import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGradoComponent } from './actualizar-grado.component';

describe('ActualizarGradoComponent', () => {
  let component: ActualizarGradoComponent;
  let fixture: ComponentFixture<ActualizarGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
