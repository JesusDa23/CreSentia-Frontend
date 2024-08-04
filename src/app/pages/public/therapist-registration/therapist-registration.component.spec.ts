import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistRegistrationComponent } from './therapist-registration.component';

describe('TherapistRegistrationComponent', () => {
  let component: TherapistRegistrationComponent;
  let fixture: ComponentFixture<TherapistRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapistRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapistRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
