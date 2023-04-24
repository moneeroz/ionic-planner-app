import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idiary } from '../interfaces/idiary';

@Injectable({
  providedIn: 'root',
})
export class DiariesService {
  apiUrl: string = 'http://localhost:3333/api/diaries';

  constructor(private http: HttpClient) {}

  // Image methods
  getImages() {
    return this.http.get<Idiary[]>(this.apiUrl + '/images');
  }

  getImage(image_id: string) {
    return this.http.get<Idiary>(this.apiUrl + '/' + image_id);
  }

  createImage(image_data: any) {
    return this.http.post<Idiary>(this.apiUrl + '/new-image', image_data);
  }

  // Video methods
  getVideos() {
    return this.http.get<Idiary[]>(this.apiUrl + '/videos');
  }

  getVideo(video_id: string) {
    return this.http.get<Idiary>(this.apiUrl + '/' + video_id);
  }

  createVideo(video_data: any) {
    return this.http.post<Idiary>(this.apiUrl + '/new-video', video_data);
  }
}
