import { OYIPage } from './app.po';

describe('oyi App', function() {
  let page: OYIPage;

  beforeEach(() => {
    page = new OYIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
