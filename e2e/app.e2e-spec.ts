import { OsThemePage } from './app.po';

describe('os-theme App', () => {
  let page: OsThemePage;

  beforeEach(() => {
    page = new OsThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
