import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CareerService } from './career.service';

describe('Career Service', () => {
  beforeEachProviders(() => [CareerService]);

  it('should ...',
      inject([CareerService], (service: CareerService) => {
    expect(service).toBeTruthy();
  }));
});
