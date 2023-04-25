import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Inote } from 'src/app/interfaces/inote';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class NoteComponent implements OnInit {
  @Input() note!: Inote;

  // custom event emitter
  @Output() deleteEvent = new EventEmitter();

  constructor(private notesService: NotesService) {}

  ngOnInit() {}

  onNoteDelete(note_id: string) {
    if (confirm(`Are you sure you want to delete ${this.note.name} Note?`)) {
      this.notesService
        .updateNoteDeleteStatus(note_id)
        .subscribe((result) => console.log(result));

      // Triggering our custom event
      this.deleteEvent.emit(this.note.id);
    }
  }
}
