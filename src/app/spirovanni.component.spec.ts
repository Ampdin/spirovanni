import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SpirovanniAppComponent } from '../app/spirovanni.component';

beforeEachProviders(() => [SpirovanniAppComponent]);

describe('App: Spirovanni', () => {
  it('should create the app',
      inject([SpirovanniAppComponent], (app: SpirovanniAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'spirovanni works!\'',
      inject([SpirovanniAppComponent], (app: SpirovanniAppComponent) => {
    expect(app.title).toEqual('spirovanni works!');
  }));
});
