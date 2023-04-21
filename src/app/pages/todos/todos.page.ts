import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { Itodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';
import { TodoComponent } from 'src/app/components/todo/todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
  standalone: true,
  imports: [IonicModule, TodoComponent, NgFor],
})
export class TodosPage implements OnInit {
  todos: Itodo[] = [];

  constructor(private todosService: TodosService) {}
  ionViewWillEnter() {
    this.todosService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  ngOnInit() {}
}
