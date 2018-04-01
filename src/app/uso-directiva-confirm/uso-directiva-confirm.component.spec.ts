import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoDirectivaConfirmComponent } from './uso-directiva-confirm.component';

describe('UsoDirectivaConfirmComponent', () => {
  let component: UsoDirectivaConfirmComponent;
  let fixture: ComponentFixture<UsoDirectivaConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoDirectivaConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoDirectivaConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
