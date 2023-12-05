import { Selector } from 'testcafe';

class Profile {
  constructor() {
    this.pageId = '#preview-profile';
    this.pageSelector = Selector(this.pageId);
    this.pageIdCompany = '#listprofile';
    this.pageSelectorCompany = Selector(this.pageIdCompany);
  }

  async pageIsDisplayedStudent(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async pageIsDisplayedCompany(testController) {
    await testController.expect(this.pageSelectorCompany.exists).ok();
  }

  async addToCart(testController) {
    await testController.expect(Selector('#add-cart').exists).ok();
    await testController.click('#add-cart');
  }
}

export const profile = new Profile();
