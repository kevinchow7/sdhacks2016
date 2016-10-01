import { Sdhack2016Page } from './app.po';

describe('sdhack2016 App', function() {
  let page: Sdhack2016Page;

  beforeEach(() => {
    page = new Sdhack2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
