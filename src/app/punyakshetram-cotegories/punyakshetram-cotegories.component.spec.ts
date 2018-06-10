import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetramCotegoriesComponent } from './punyakshetram-cotegories.component';

describe('PunyakshetramCotegoriesComponent', () => {
  let component: PunyakshetramCotegoriesComponent;
  let fixture: ComponentFixture<PunyakshetramCotegoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetramCotegoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetramCotegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
