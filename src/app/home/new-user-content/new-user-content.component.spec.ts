import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserContentComponent } from './new-user-content.component';

describe('NewUserContentComponent', () => {
  let component: NewUserContentComponent;
  let fixture: ComponentFixture<NewUserContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
