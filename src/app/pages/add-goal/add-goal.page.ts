import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class AddGoalPage implements OnInit {
  goalForm;

  constructor(
    private formBuilder: FormBuilder,
    private goalsService: GoalsService,
    private router: Router,
  ) {
    const date = new Date();
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    this.goalForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [new Date(date).toISOString(), Validators.required],
      end_date: [new Date(date).toISOString(), Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get nameFormControl() {
    return this.goalForm.get('name');
  }

  get descriptionFormControl() {
    return this.goalForm.get('description');
  }

  get startDateFormControl() {
    return this.goalForm.get('start_date');
  }

  get endDateFormControl() {
    return this.goalForm.get('end_date');
  }

  get statusFormControl() {
    return this.goalForm.get('status');
  }

  onSubmit() {
    const goal_data = this.goalForm.value;

    this.goalsService
      .createGoal(goal_data)
      .subscribe((result) => console.log(result));

    this.router.navigateByUrl('goals');
  }
}
