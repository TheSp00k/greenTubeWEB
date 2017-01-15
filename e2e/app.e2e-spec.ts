import { GreenTubeWEBPage } from './app.po';

describe('green-tube-web App', function() {
  let page: GreenTubeWEBPage;

  beforeEach(() => {
    page = new GreenTubeWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
