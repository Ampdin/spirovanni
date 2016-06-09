import { SpirovanniPage } from './app.po';

describe('spirovanni App', function() {
  let page: SpirovanniPage;

  beforeEach(() => {
    page = new SpirovanniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spirovanni works!');
  });
});
