import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaCategoriesComponent } from './pooja-categories.component';

describe('PoojaCategoriesComponent', () => {
  let component: PoojaCategoriesComponent;
  let fixture: ComponentFixture<PoojaCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
