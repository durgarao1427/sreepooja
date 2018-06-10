import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoojaCategoriesComponent } from './all-pooja-categories.component';

describe('AllPoojaCategoriesComponent', () => {
  let component: AllPoojaCategoriesComponent;
  let fixture: ComponentFixture<AllPoojaCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPoojaCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPoojaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
