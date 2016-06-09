import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Career} from './career.model';

describe('Career', () => {
  it('should create an instance', () => {
    expect(new Career()).toBeTruthy();
  });
});
