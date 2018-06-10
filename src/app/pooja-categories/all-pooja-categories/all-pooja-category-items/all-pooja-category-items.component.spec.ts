import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoojaCategoryItemsComponent } from './all-pooja-category-items.component';

describe('AllPoojaCategoryItemsComponent', () => {
  let component: AllPoojaCategoryItemsComponent;
  let fixture: ComponentFixture<AllPoojaCategoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPoojaCategoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPoojaCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
