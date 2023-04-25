import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor, NgIf],
})
export class AddTodoPage implements OnInit {
  todoForm;
  editMode: boolean = false;
  editTodoId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private todosService: TodosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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

    // Get todo id from current url
    const todo_id = this.activatedRoute.snapshot.paramMap.get('todo_id');

    // Check if todo id was specified, if true we are in edit mode else we are on create mode
    if (todo_id !== null) {
      this.editMode = true;
      this.editTodoId = todo_id;

      // Get todo data from database and populate the form inputs with the data
      todosService
        .getTodo(todo_id)
        .subscribe((result) => this.todoForm.patchValue(result));
    }
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
    const todo_data = this.todoForm.value;

    this.todosService
      .createTodo(todo_data)
      .subscribe((result) => console.log(result));

    this.todoForm.reset();

    this.router.navigateByUrl('todos');
  }

  onSubmitEdit() {
    const todo_data = this.todoForm.value;

    this.todosService
      .editTodo(this.editTodoId, todo_data)
      .subscribe((result) => console.log(result));
    this.router.navigateByUrl('achievements');
  }
}
