import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNotePage } from './add-note.page';

describe('AddNotePage', () => {
  let component: AddNotePage;
  let fixture: ComponentFixture<AddNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
