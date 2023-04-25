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

  // Update note deleted status to true
  updateNoteDeleteStatus(note_id: string) {
    return this.http.patch<Inote>(this.apiUrl + '/deleted-status/' + note_id, {
      deleted: 'true',
    });
  }

  editNote(note_id: string, note_data: any) {
    return this.http.put<Inote>(
      this.apiUrl + '/update-note/' + note_id,
      note_data,
    );
  }
}
