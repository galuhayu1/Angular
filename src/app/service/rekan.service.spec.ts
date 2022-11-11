import { TestBed } from '@angular/core/testing';

import { RekanService } from './rekan.service';

describe('RekanService', () => {
  let service: RekanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RekanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
