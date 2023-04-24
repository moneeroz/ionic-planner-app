import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inote } from '../interfaces/inote';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  apiUrl: string = 'http://localhost:3333/api/notes';

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<Inote[]>(this.apiUrl);
  }

  getNote(note_id: string) {
    return this.http.get<Inote>(this.apiUrl + '/' + note_id);
  }

  createNote(note_data: any) {
    return this.http.post<Inote>(this.apiUrl, note_data);
  }

  deleteNote(note_id: string) {
    return this.http.delete<Inote>(this.apiUrl + '/' + note_id);
  }
}
