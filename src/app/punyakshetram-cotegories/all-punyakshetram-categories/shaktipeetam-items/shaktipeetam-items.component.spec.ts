import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktipeetamItemsComponent } from './shaktipeetam-items.component';

describe('ShaktipeetamItemsComponent', () => {
  let component: ShaktipeetamItemsComponent;
  let fixture: ComponentFixture<ShaktipeetamItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaktipeetamItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktipeetamItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
