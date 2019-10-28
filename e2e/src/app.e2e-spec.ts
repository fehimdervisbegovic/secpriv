import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('One very simple e2e test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('Send button must exists', async () => {
    expect(await page.getSendButtonText()).toEqual('Send');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
