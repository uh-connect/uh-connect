import { Selector } from 'testcafe';

class Footer {
  constructor() {
    this.pageId = '#footer-container';
    this.pageSelector = Selector(this.pageId);
  }

  async compIsDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async goToFaq(testController) {
    await testController.expect(Selector('#FAQ-button').exists).ok();
    await testController.click('#FAQ-button');
    await testController.expect(Selector('#FAQ-page').exists).ok();
  }

  async goToProjectPage(testController) {
    await testController.expect(Selector('#project-button').exists).ok();
    await testController.click('#project-button');
  }

  async goToGitHub(testController) {
    await testController.expect(Selector('#git-button').exists).ok();
    await testController.click('#git-button');
  }

  async goToAbout(testController) {
    await testController.expect(Selector('#about-button').exists).ok();
    await testController.click('#about-button');
  }

  async goToTerms(testController) {
    await testController.expect(Selector('#terms-button').exists).ok();
    await testController.click('#terms-button');
  }
}

export const foot = new Footer();
