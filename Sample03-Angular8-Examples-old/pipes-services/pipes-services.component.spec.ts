import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesServicesComponent } from './pipes-services.component';

describe('PipesServicesComponent', () => {
  let component: PipesServicesComponent;
  let fixture: ComponentFixture<PipesServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
