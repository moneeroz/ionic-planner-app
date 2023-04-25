import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor, NgIf],
})
export class AddNotePage implements OnInit {
  noteForm;
  editMode: boolean = false;
  editNoteId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    const date = new Date();
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    this.noteForm = formBuilder.group({
      name: ['', Validators.required],
      details: ['', Validators.required],
      importance: ['', Validators.required],
    });

    // Get note id from current url
    const note_id = this.activatedRoute.snapshot.paramMap.get('note_id');

    // Check if note id was specified, if true we are in edit mode else we are on create mode
    if (note_id !== null) {
      this.editMode = true;
      this.editNoteId = note_id;

      // Get note data from database and populate the form inputs with the data
      notesService
        .getNote(note_id)
        .subscribe((result) => this.noteForm.patchValue(result));
    }
  }

  ngOnInit() {}

  get nameFormControl() {
    return this.noteForm.get('name');
  }

  get detailsFormControl() {
    return this.noteForm.get('details');
  }

  get importanceFormControl() {
    return this.noteForm.get('importance');
  }

  onSubmit() {
    const note_data = this.noteForm.value;

    this.notesService
      .createNote(note_data)
      .subscribe((result) => console.log(result));

    this.noteForm.reset();

    this.router.navigateByUrl('notes');
  }

  onSubmitEdit() {
    const note_data = this.noteForm.value;

    this.notesService
      .editNote(this.editNoteId, note_data)
      .subscribe((result) => console.log(result));

    this.router.navigateByUrl('notes');
  }
}
