import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddImagePage } from './add-image.page';

describe('AddImagePage', () => {
  let component: AddImagePage;
  let fixture: ComponentFixture<AddImagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
