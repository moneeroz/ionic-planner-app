import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
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

  constructor(
    private todosService: TodosService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {}

  onChecked(event: any) {
    if (event.detail.checked) {
      this.todosService
        .updateTodoStatus(this.todo.id)
        .subscribe((todo) => console.log(todo));

      // Triggering our custom event
      this.checkedEvent.emit(this.todo.id);
    }
  }

  async presentAlert(event: any) {
    if (event.detail.checked) {
      const alert = await this.alertController.create({
        header: this.todo.name,
        message: 'completed successfully!',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
