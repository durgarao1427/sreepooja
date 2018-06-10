import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshtradescriptionComponent } from './punyakshtradescription.component';

describe('PunyakshtradescriptionComponent', () => {
  let component: PunyakshtradescriptionComponent;
  let fixture: ComponentFixture<PunyakshtradescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshtradescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshtradescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
