import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoalsService } from 'src/app/services/goals.service';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class AddTodoPage implements OnInit {
  todoForm;

  constructor(
    private formBuilder: FormBuilder,
    private todosService: TodosService,
    private router: Router,
  ) {
    const date = new Date();
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    this.todoForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [new Date(date).toISOString(), Validators.required],
      end_date: [new Date(date).toISOString(), Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get nameFormControl() {
    return this.todoForm.get('name');
  }

  get descriptionFormControl() {
    return this.todoForm.get('description');
  }

  get startDateFormControl() {
    return this.todoForm.get('start_date');
  }

  get endDateFormControl() {
    return this.todoForm.get('end_date');
  }

  get statusFormControl() {
    return this.todoForm.get('status');
  }

  onSubmit() {
    const goal_data = this.todoForm.value;

    this.todosService
      .createTodo(goal_data)
      .subscribe((result) => console.log(result));

    this.todoForm.reset();

    this.router.navigateByUrl('todos');
  }
}
