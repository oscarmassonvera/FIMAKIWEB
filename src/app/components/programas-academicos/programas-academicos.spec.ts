import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasAcademicos } from './programas-academicos';

describe('ProgramasAcademicos', () => {
  let component: ProgramasAcademicos;
  let fixture: ComponentFixture<ProgramasAcademicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasAcademicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramasAcademicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
