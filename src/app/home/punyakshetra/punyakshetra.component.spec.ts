import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraComponent } from './punyakshetra.component';

describe('PunyakshetraComponent', () => {
  let component: PunyakshetraComponent;
  let fixture: ComponentFixture<PunyakshetraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
