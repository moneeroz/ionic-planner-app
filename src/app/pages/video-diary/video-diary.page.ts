import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Idiary } from 'src/app/interfaces/idiary';
import { DiariesService } from 'src/app/services/diaries.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-diary',
  templateUrl: './video-diary.page.html',
  styleUrls: ['./video-diary.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, RouterModule],
})
export class VideoDiaryPage implements OnInit {
  videos: Idiary[] = [];

  videosSrc = [
    {
      title: "What's new in Ionic 7",
      src: '../../../assets/videos/ionic7.mp4',
    },
    {
      title: 'Clickbait',
      src: '../../../assets/videos/motivation.mp4',
    },
    {
      title: 'Hmmmmm',
      src: '../../../assets/videos/meh.mp4',
    },
  ];

  constructor(
    private diariesService: DiariesService,
    public sanitizer: DomSanitizer,
  ) {}

  ionViewWillEnter() {
    this.diariesService.getVideos().subscribe((videos) => {
      for (const video of videos) {
        video.link = this.sanitizer.bypassSecurityTrustResourceUrl(video.link);
      }
      this.videos = videos;
    });
  }

  ngOnInit() {}
}
