import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Inote } from 'src/app/interfaces/inote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NoteComponent implements OnInit {
  @Input() note!: Inote;

  // custom event emitter
  @Output() deleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onNoteDelete(note_id: string) {
    if (confirm(`Are you sure you want to delete ${this.note.name} Note?`)) {
      // Triggering our custom event
      this.deleteEvent.emit(this.note.id);
    }
  }
}
