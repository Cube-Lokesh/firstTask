import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSigninComponent } from './general-signin.component';

describe('GeneralSigninComponent', () => {
  let component: GeneralSigninComponent;
  let fixture: ComponentFixture<GeneralSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
