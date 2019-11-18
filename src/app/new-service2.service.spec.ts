import { TestBed } from '@angular/core/testing';

import { NewService2Service } from './new-service2.service';

describe('NewService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewService2Service = TestBed.get(NewService2Service);
    expect(service).toBeTruthy();
  });
});
