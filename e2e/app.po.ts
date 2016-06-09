export class SpirovanniPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spirovanni-app h1')).getText();
  }
}
