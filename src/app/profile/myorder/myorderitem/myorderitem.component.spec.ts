import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderitemComponent } from './myorderitem.component';

describe('MyorderitemComponent', () => {
  let component: MyorderitemComponent;
  let fixture: ComponentFixture<MyorderitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyorderitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyorderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
