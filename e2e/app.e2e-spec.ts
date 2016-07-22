import { FirebasechatPage } from './app.po';

describe('firebasechat App', function() {
  let page: FirebasechatPage;

  beforeEach(() => {
    page = new FirebasechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
