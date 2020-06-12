import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoginComponent } from './dynamic-login.component';

describe('DynamicLoginComponent', () => {
  let component: DynamicLoginComponent;
  let fixture: ComponentFixture<DynamicLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
