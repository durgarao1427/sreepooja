import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojadescriptionComponent } from './poojadescription.component';

describe('PoojadescriptionComponent', () => {
  let component: PoojadescriptionComponent;
  let fixture: ComponentFixture<PoojadescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojadescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojadescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
