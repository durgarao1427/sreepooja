import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatactoptionComponent } from './conatactoption.component';

describe('ConatactoptionComponent', () => {
  let component: ConatactoptionComponent;
  let fixture: ComponentFixture<ConatactoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatactoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatactoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
