import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotesService } from 'src/app/services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class AddNotePage implements OnInit {
  noteForm;

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    private router: Router,
  ) {
    const date = new Date();
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    this.noteForm = formBuilder.group({
      name: ['', Validators.required],
      details: ['', Validators.required],
      importance: ['', Validators.required],
    });
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
    const goal_data = this.noteForm.value;

    this.notesService
      .createNote(goal_data)
      .subscribe((result) => console.log(result));

    this.router.navigateByUrl('notes');
  }
}
