import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaItemComponent } from './pooja-item.component';

describe('PoojaItemComponent', () => {
  let component: PoojaItemComponent;
  let fixture: ComponentFixture<PoojaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
