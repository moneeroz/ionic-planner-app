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
  selector: 'app-add-video',
  templateUrl: './add-video.page.html',
  styleUrls: ['./add-video.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, NgFor],
})
export class AddVideoPage implements OnInit {
  videoForm;

  constructor(
    private formBuilder: FormBuilder,
    private diariesService: DiariesService,
    private router: Router,
  ) {
    this.videoForm = formBuilder.group({
      link: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get linkFormControlGroup() {
    return this.videoForm.get('link');
  }

  onSubmit() {
    const video_data = this.videoForm.value;

    this.diariesService
      .createVideo(video_data)
      .subscribe((result) => console.log(result));

    this.videoForm.reset();

    this.router.navigateByUrl('video-diary');
  }
}
