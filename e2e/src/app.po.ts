import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToRoute(routePart) {
    return browser.get(`${browser.baseUrl}/${routePart}`) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getSendButtonText() {
    return element(by.id('btnSend')).getText() as Promise<string>;
  }
}
