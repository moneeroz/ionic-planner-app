import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../interfaces/itodo';
import { Igoal } from '../interfaces/igoal';
import { Inote } from '../interfaces/inote';

@Injectable({
  providedIn: 'root',
})
export class TrashService {
  goalsApiUrl: string = 'http://localhost:3333/api/goals';
  notesApiUrl: string = 'http://localhost:3333/api/notes';
  todosApiUrl: string = 'http://localhost:3333/api/todos';

  constructor(private http: HttpClient) {}

  // Get items marked as deleted from DB methods
  getDeletedGoals() {
    return this.http.get<Igoal[]>(this.goalsApiUrl + '/deleted');
  }

  getDeletedNotes() {
    return this.http.get<Inote[]>(this.notesApiUrl + '/deleted');
  }

  getDeletedTodos() {
    return this.http.get<Itodo[]>(this.todosApiUrl + '/deleted');
  }

  // Update item delete status methods
  updateGoalDeleteStatus(goal_id: string) {
    return this.http.patch<Igoal>(
      this.goalsApiUrl + '/deleted-status/' + goal_id,
      {
        deleted: 'false',
      },
    );
  }

  updateNoteDeleteStatus(note_id: string) {
    return this.http.patch<Inote>(
      this.notesApiUrl + '/deleted-status/' + note_id,
      {
        deleted: 'false',
      },
    );
  }

  updateTodoDeleteStatus(todo_id: string) {
    return this.http.patch<Itodo>(
      this.todosApiUrl + '/deleted-status/' + todo_id,
      {
        deleted: 'false',
      },
    );
  }

  // Delete items from DB methods
  deleteGoal(goal_id: string) {
    return this.http.delete<Igoal>(this.goalsApiUrl + '/' + goal_id);
  }

  deleteNote(note_id: string) {
    return this.http.delete<Inote>(this.notesApiUrl + '/' + note_id);
  }

  deleteTodo(todo_id: string) {
    return this.http.delete<Itodo>(this.todosApiUrl + '/' + todo_id);
  }
}
