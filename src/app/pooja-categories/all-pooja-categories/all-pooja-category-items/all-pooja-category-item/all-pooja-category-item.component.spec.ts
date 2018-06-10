import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoojaCategoryItemComponent } from './all-pooja-category-item.component';

describe('AllPoojaCategoryItemComponent', () => {
  let component: AllPoojaCategoryItemComponent;
  let fixture: ComponentFixture<AllPoojaCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPoojaCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPoojaCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
