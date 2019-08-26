import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BecomeStationComponent} from './become-station.component';


describe('BecomeStationComponent', () => {
  let component: BecomeStationComponent;
  let fixture: ComponentFixture<BecomeStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeStationComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
