import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdfcComponent} from './adfc.component';


describe('AdfcComponent', () => {
  let component: AdfcComponent;
  let fixture: ComponentFixture<AdfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdfcComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
