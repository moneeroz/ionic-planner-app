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

  onChecked(todo_id: string) {
    // remove todo from UI
    const index = this.todos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    // Remove todo data from array
    this.todos.splice(index, 1);

    alert('todo completed successfully!');
  }

  ngOnInit() {}
}
