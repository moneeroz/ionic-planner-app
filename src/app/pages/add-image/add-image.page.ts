import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DiariesService } from 'src/app/services/diaries.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class AddImagePage implements OnInit {
  imageForm;

  constructor(
    private formBuilder: FormBuilder,
    private diariesService: DiariesService,
    private router: Router,
  ) {
    this.imageForm = formBuilder.group({
      link: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get linkFormControlGroup() {
    return this.imageForm.get('link');
  }

  onSubmit() {
    const image_data = this.imageForm.value;

    this.diariesService
      .createImage(image_data)
      .subscribe((result) => console.log(result));

    this.imageForm.reset();

    this.router.navigateByUrl('image-diary');
  }
}
