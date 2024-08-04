import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsRegistrationComponent } from './adults-registration.component';

describe('AdultsRegistrationComponent', () => {
  let component: AdultsRegistrationComponent;
  let fixture: ComponentFixture<AdultsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultsRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
