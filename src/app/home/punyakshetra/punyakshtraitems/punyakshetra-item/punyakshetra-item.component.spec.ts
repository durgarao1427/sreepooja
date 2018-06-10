import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetraItemComponent } from './punyakshetra-item.component';

describe('PunyakshetraItemComponent', () => {
  let component: PunyakshetraItemComponent;
  let fixture: ComponentFixture<PunyakshetraItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetraItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
