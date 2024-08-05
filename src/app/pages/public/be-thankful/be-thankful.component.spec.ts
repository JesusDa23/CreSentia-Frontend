import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeThankfulComponent } from './be-thankful.component';

describe('BeThankfulComponent', () => {
  let component: BeThankfulComponent;
  let fixture: ComponentFixture<BeThankfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeThankfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeThankfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
