import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoteComponent } from 'src/app/components/note/note.component';
import { Inote } from 'src/app/interfaces/inote';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [IonicModule, NoteComponent, NgFor, RouterModule],
})
export class NotesPage implements OnInit {
  notes: Inote[] = [];
  constructor(private notesService: NotesService) {}

  ionViewWillEnter() {
    this.notesService.getNotes().subscribe((notes) => (this.notes = notes));
  }

  onNoteDelete(note_id: string) {
    // remove note from UI
    const index = this.notes.findIndex((note) => {
      // Get note index from the array
      return note.id === note_id;
    });

    // Remove note data from array
    this.notes.splice(index, 1);

    alert('Note moved to trash successfully!');
  }

  ngOnInit() {}
}
