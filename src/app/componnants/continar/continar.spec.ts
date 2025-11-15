import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Continar } from './continar';

describe('Continar', () => {
  let component: Continar;
  let fixture: ComponentFixture<Continar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Continar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Continar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
