import { Component, OnInit } from '@angular/core';

import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { Itodo } from 'src/app/interfaces/itodo';
import { Igoal } from 'src/app/interfaces/igoal';
import { Inote } from 'src/app/interfaces/inote';
import { TrashService } from 'src/app/services/trash.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor],
})
export class TrashPage implements OnInit {
  deletedTodos: Itodo[] = [];
  deletedGoals: Igoal[] = [];
  deletedNotes: Inote[] = [];
  deletedTodo!: Itodo;
  deletedGoal!: Igoal;
  deletedNote!: Inote;

  constructor(
    private trashService: TrashService,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  ionViewWillEnter() {
    // Get all deleted Todos
    this.trashService
      .getDeletedTodos()
      .subscribe((deletedTodos) => (this.deletedTodos = deletedTodos));

    // Get all deleted Goals
    this.trashService
      .getDeletedGoals()
      .subscribe((deletedGoals) => (this.deletedGoals = deletedGoals));

    // Get all deleted Notes
    this.trashService
      .getDeletedNotes()
      .subscribe((deletedNotes) => (this.deletedNotes = deletedNotes));
  }

  ngOnInit() {}

  /// /// /// /// /// /// /// /// /// /// /// /// ///

  // Recover Todo from trash page
  async onTodoRecover(todo_id: string) {
    // find todo index
    const index = this.deletedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    const recoverAlert = await this.alertController.create({
      header: 'Recover',

      message: `Are you sure you want to recover ${this.deletedTodos[index].name}?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete todo from database
            this.trashService
              .updateTodoDeleteStatus(todo_id)
              .subscribe((result) => console.log(result));
            this.recovertodoToast(this.deletedTodos[index].id);

            // remove todo from UI
            // Remove todo data from array
            this.deletedTodos.splice(index, 1);
          },
        },
      ],
    });
    await recoverAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to recover ${this.deletedTodos[index].name} Todo?`,
    //   )
    // ) {
    //   this.trashService
    //     .updateTodoDeleteStatus(todo_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove todo data from array
    //   this.deletedTodos.splice(index, 1);

    //   alert('Todo recovered successfully!');
    // }
  }

  async recovertodoToast(id: string) {
    this.deletedTodos.forEach((todo) => {
      if (todo.id === id) {
        this.deletedTodo = todo;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedTodo.name} recovered successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  // Recover Goal from trash page
  async onGoalRecover(goal_id: string) {
    // find goal index
    const index = this.deletedGoals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    const recoverAlert = await this.alertController.create({
      header: 'Recover',

      message: `Are you sure you want to recover ${this.deletedGoals[index].name}?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete goal from database
            this.trashService
              .updateGoalDeleteStatus(goal_id)
              .subscribe((result) => console.log(result));
            this.recoverGoalToast(this.deletedGoals[index].id);

            // remove goal from UI
            // Remove goal data from array
            this.deletedGoals.splice(index, 1);
          },
        },
      ],
    });
    await recoverAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to recover ${this.deletedGoals[index].name} Goal?`,
    //   )
    // ) {
    //   this.trashService
    //     .updateGoalDeleteStatus(goal_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove goal data from array
    //   this.deletedGoals.splice(index, 1);

    //   alert('Goal recovered successfully!');
    // }
  }

  async recoverGoalToast(id: string) {
    this.deletedGoals.forEach((goal) => {
      if (goal.id === id) {
        this.deletedGoal = goal;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedGoal.name} recovered successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  // Recover Note from trash page
  async onNoteRecover(note_id: string) {
    // find note index
    const index = this.deletedNotes.findIndex((note) => {
      // Get note index from the array
      return note.id === note_id;
    });

    const recoverAlert = await this.alertController.create({
      header: 'Recover',

      message: `Are you sure you want to recover ${this.deletedNotes[index].name}?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete note from database
            this.trashService
              .updateNoteDeleteStatus(note_id)
              .subscribe((result) => console.log(result));
            this.recoverNoteToast(this.deletedNotes[index].id);

            // remove note from UI
            // Remove note data from array
            this.deletedNotes.splice(index, 1);
          },
        },
      ],
    });
    await recoverAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to recover ${this.deletedNotes[index].name} Note?`,
    //   )
    // ) {
    //   this.trashService
    //     .updateNoteDeleteStatus(note_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove note data from array
    //   this.deletedNotes.splice(index, 1);

    //   alert('Note recovered successfully!');
    // }
  }

  async recoverNoteToast(id: string) {
    this.deletedNotes.forEach((note) => {
      if (note.id === id) {
        this.deletedNote = note;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedNote.name} recovered successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  /// /// /// /// /// /// /// /// /// /// /// ///

  // Delete Todo from DB and UI
  async onTodoDelete(todo_id: string) {
    // find todo index
    const index = this.deletedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    const deleteAlert = await this.alertController.create({
      header: 'Delete',

      message: `Are you sure you want to delete ${this.deletedTodos[index].name} permenantly?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete todo from database
            this.trashService
              .deleteTodo(todo_id)
              .subscribe((result) => console.log(result));
            this.todoToast(this.deletedTodos[index].id);

            // remove todo from UI
            // Remove todo data from array
            this.deletedTodos.splice(index, 1);
          },
        },
      ],
    });
    await deleteAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to delete ${this.deletedTodos[index].name} Todo?`,
    //   )
    // ) {
    //   this.trashService
    //     .deleteTodo(todo_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove todo data from array
    //   this.deletedTodos.splice(index, 1);

    //   alert('Todo deleted successfully!');
    // }
  }

  async todoToast(id: string) {
    this.deletedTodos.forEach((todo) => {
      if (todo.id === id) {
        this.deletedTodo = todo;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedTodo.name} deleted successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  // Delete Goal from DB and UI
  async onGoalDelete(goal_id: string) {
    // find Goal index
    const index = this.deletedGoals.findIndex((Goal) => {
      // Get Goal index from the array
      return Goal.id === goal_id;
    });

    const deleteAlert = await this.alertController.create({
      header: 'Delete',

      message: `Are you sure you want to delete ${this.deletedGoals[index].name} permenantly?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete goal from database
            this.trashService
              .deleteGoal(goal_id)
              .subscribe((result) => console.log(result));
            this.goalToast(this.deletedGoals[index].id);

            // remove goal from UI
            // Remove goal data from array
            this.deletedGoals.splice(index, 1);
          },
        },
      ],
    });
    await deleteAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to delete ${this.deletedGoals[index].name} Goal?`,
    //   )
    // ) {
    //   this.trashService
    //     .deleteGoal(goal_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove Goal data from array
    //   this.deletedGoals.splice(index, 1);

    //   alert('Goal deleted successfully!');
    // }
  }

  async goalToast(id: string) {
    this.deletedGoals.forEach((goal) => {
      if (goal.id === id) {
        this.deletedGoal = goal;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedGoal.name} deleted successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  // Delete Note from DB and UI
  async onNoteDelete(note_id: string) {
    // find note index
    const index = this.deletedNotes.findIndex((note) => {
      // Get note index from the array
      return note.id === note_id;
    });

    const deleteAlert = await this.alertController.create({
      header: 'Delete',

      message: `Are you sure you want to delete ${this.deletedNotes[index].name} permenantly?`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // delete note from database
            this.trashService
              .deleteNote(note_id)
              .subscribe((result) => console.log(result));
            this.noteToast(this.deletedNotes[index].id);

            // remove note from UI
            // Remove note data from array
            this.deletedNotes.splice(index, 1);
          },
        },
      ],
    });
    await deleteAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to delete ${this.deletedNotes[index].name} Note?`,
    //   )
    // ) {
    //   this.trashService
    //     .deleteNote(note_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove note data from array
    //   this.deletedNotes.splice(index, 1);

    //   alert('Note deleted successfully!');
    // }
  }

  async noteToast(id: string) {
    this.deletedNotes.forEach((note) => {
      if (note.id === id) {
        this.deletedNote = note;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedNote.name} deleted successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}
