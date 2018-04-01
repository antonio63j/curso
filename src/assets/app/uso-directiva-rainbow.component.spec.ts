import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoDirectivaRainbowComponent } from './uso-directiva-rainbow.component';

describe('UsoDirectivaRainbowComponent', () => {
  let component: UsoDirectivaRainbowComponent;
  let fixture: ComponentFixture<UsoDirectivaRainbowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoDirectivaRainbowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoDirectivaRainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
