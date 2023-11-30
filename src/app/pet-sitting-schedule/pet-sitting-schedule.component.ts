import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {futureDateValidator} from './date.validator'; // Import the custom validator


@Component({
  selector: 'app-pet-sitting-schedule',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pet-sitting-schedule.component.html',
  styleUrl: './pet-sitting-schedule.component.css'
})
export class PetSittingScheduleComponent {
  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      startDate: ['', Validators.required,futureDateValidator],
      endDate: ['', Validators.required, futureDateValidator],
    });
  }

  submitSchedule(): void {
    if (this.scheduleForm.valid) {
      const startDate = this.scheduleForm.get('startDate')!.value;
      const endDate = this.scheduleForm.get('endDate')!.value;

      // Implement your logic with the selected dates
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);

      // Reset the form after processing
      this.scheduleForm.reset();
    }
  }
}
