import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDynamicComponent } from './show-dynamic.component';

describe('ShowDynamicComponent', () => {
  let component: ShowDynamicComponent;
  let fixture: ComponentFixture<ShowDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
