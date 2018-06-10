import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshtraitemsComponent } from './punyakshtraitems.component';

describe('PunyakshtraitemsComponent', () => {
  let component: PunyakshtraitemsComponent;
  let fixture: ComponentFixture<PunyakshtraitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshtraitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshtraitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
