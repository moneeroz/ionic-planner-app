import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
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

  constructor(private trashService: TrashService) {}

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

  /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

  // Recover Todo from trash page
  onTodoRecover(todo_id: string) {
    // find todo index
    const index = this.deletedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    if (
      confirm(
        `Are you sure you want to recover ${this.deletedTodos[index].name} Todo?`,
      )
    ) {
      this.trashService
        .updateTodoDeleteStatus(todo_id)
        .subscribe((result) => console.log(result));

      // Remove todo data from array
      this.deletedTodos.splice(index, 1);

      alert('Todo recovered successfully!');
    }
  }

  // Recover Goal from trash page
  onGoalRecover(goal_id: string) {
    // find goal index
    const index = this.deletedGoals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    if (
      confirm(
        `Are you sure you want to recover ${this.deletedGoals[index].name} Goal?`,
      )
    ) {
      this.trashService
        .updateGoalDeleteStatus(goal_id)
        .subscribe((result) => console.log(result));

      // Remove goal data from array
      this.deletedGoals.splice(index, 1);

      alert('Goal recovered successfully!');
    }
  }

  // Recover Note from trash page
  onNoteRecover(note_id: string) {
    // find note index
    const index = this.deletedNotes.findIndex((note) => {
      // Get note index from the array
      return note.id === note_id;
    });

    if (
      confirm(
        `Are you sure you want to recover ${this.deletedNotes[index].name} note?`,
      )
    ) {
      this.trashService
        .updateNoteDeleteStatus(note_id)
        .subscribe((result) => console.log(result));

      // Remove note data from array
      this.deletedNotes.splice(index, 1);

      alert('Note recovered successfully!');
    }
  }

  // Delete Todo from DB and UI
  onTodoDelete(todo_id: string) {
    // find todo index
    const index = this.deletedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    if (
      confirm(
        `Are you sure you want to delete ${this.deletedTodos[index].name} Todo?`,
      )
    ) {
      this.trashService
        .deleteTodo(todo_id)
        .subscribe((result) => console.log(result));

      // Remove todo data from array
      this.deletedTodos.splice(index, 1);

      alert('Todo deleted successfully!');
    }
  }

  // Delete Goal from DB and UI
  onGoalDelete(Goal_id: string) {
    // find Goal index
    const index = this.deletedGoals.findIndex((Goal) => {
      // Get Goal index from the array
      return Goal.id === Goal_id;
    });

    if (
      confirm(
        `Are you sure you want to delete ${this.deletedGoals[index].name} Goal?`,
      )
    ) {
      this.trashService
        .deleteGoal(Goal_id)
        .subscribe((result) => console.log(result));

      // Remove Goal data from array
      this.deletedGoals.splice(index, 1);

      alert('Goal deleted successfully!');
    }
  }

  // Delete Note from DB and UI
  onNoteDelete(note_id: string) {
    // find note index
    const index = this.deletedNotes.findIndex((note) => {
      // Get note index from the array
      return note.id === note_id;
    });

    if (
      confirm(
        `Are you sure you want to delete ${this.deletedNotes[index].name} Note?`,
      )
    ) {
      this.trashService
        .deleteNote(note_id)
        .subscribe((result) => console.log(result));

      // Remove note data from array
      this.deletedNotes.splice(index, 1);

      alert('Note deleted successfully!');
    }
  }
}
