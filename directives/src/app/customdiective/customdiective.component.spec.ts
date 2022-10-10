import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdiectiveComponent } from './customdiective.component';

describe('CustomdiectiveComponent', () => {
  let component: CustomdiectiveComponent;
  let fixture: ComponentFixture<CustomdiectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdiectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdiectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
