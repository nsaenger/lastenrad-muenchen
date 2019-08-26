import {inject, TestBed} from '@angular/core/testing';

import {WindowScrollingService} from './window-scrolling.service';


describe('WindowScrollingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowScrollingService],
    });
  });

  it('should be created', inject([WindowScrollingService], (service: WindowScrollingService) => {
    expect(service).toBeTruthy();
  }));
});
