import { TourOfHerosPage } from './app.po';

describe('tour-of-heros App', () => {
  let page: TourOfHerosPage;

  beforeEach(() => {
    page = new TourOfHerosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
