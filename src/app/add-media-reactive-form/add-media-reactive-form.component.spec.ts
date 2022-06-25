import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaReactiveFormComponent } from './add-media-reactive-form.component';

describe('AddMediaReactiveFormComponent', () => {
  let component: AddMediaReactiveFormComponent;
  let fixture: ComponentFixture<AddMediaReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMediaReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMediaReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
