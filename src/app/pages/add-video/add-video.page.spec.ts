import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVideoPage } from './add-video.page';

describe('AddVideoPage', () => {
  let component: AddVideoPage;
  let fixture: ComponentFixture<AddVideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
