/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignUtilityService } from './DesignUtility.service';

describe('Service: DesignUtility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignUtilityService]
    });
  });

  it('should ...', inject([DesignUtilityService], (service: DesignUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
