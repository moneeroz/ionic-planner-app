import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Itodo } from 'src/app/interfaces/itodo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [IonicModule, DatePipe, RouterModule],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Itodo;

  // custom event emitter
  @Output() checkedEvent = new EventEmitter();

  constructor(private todosService: TodosService) {}

  onChecked(event: any) {
    if (event.detail.checked) {
      this.todosService
        .updateTodoStatus(this.todo.id)
        .subscribe((todo) => console.log(todo));

      // Triggering our custom event
      this.checkedEvent.emit(this.todo.id);
    }
  }

  ngOnInit() {}
}
