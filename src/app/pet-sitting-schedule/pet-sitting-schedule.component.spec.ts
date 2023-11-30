import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSittingScheduleComponent } from './pet-sitting-schedule.component';

describe('PetSittingScheduleComponent', () => {
  let component: PetSittingScheduleComponent;
  let fixture: ComponentFixture<PetSittingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetSittingScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetSittingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
