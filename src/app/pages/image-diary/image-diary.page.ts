import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Idiary } from 'src/app/interfaces/idiary';
import { DiariesService } from 'src/app/services/diaries.service';

@Component({
  selector: 'app-image-diary',
  templateUrl: './image-diary.page.html',
  styleUrls: ['./image-diary.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, RouterModule],
})
export class ImageDiaryPage implements OnInit {
  images: Idiary[] = [];

  constructor(private diariesService: DiariesService) {}

  ionViewWillEnter() {
    this.diariesService
      .getImages()
      .subscribe((images) => (this.images = images));
  }

  ngOnInit() {}
}
