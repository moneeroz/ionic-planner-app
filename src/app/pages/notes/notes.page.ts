import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NoteComponent } from 'src/app/components/note/note.component';
import { Inote } from 'src/app/interfaces/inote';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [IonicModule, NoteComponent, NgFor],
})
export class NotesPage implements OnInit {
  notes: Inote[] = [];
  constructor(private notesService: NotesService) {}

  ionViewWillEnter() {
    this.notesService.getNotes().subscribe((notes) => (this.notes = notes));
  }

  ngOnInit() {}
}
