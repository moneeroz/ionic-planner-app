import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}
}
