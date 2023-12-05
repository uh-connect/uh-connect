import { Selector } from 'testcafe';

class Cart {
  constructor() {
    this.pageId = '#cart-student';
    this.pageSelector = Selector(this.pageId);
  }

  async pageIsDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async removeFromCartStudent(testController) {
    await testController.expect(Selector('#job-card').exists).ok();
    await testController.expect(Selector('#remove-cart').exists).ok();
    await testController.click('#remove-cart');
  }

  async removeFromCartCompany(testController) {
    await testController.expect(Selector('#profile-cart').exists).ok();
    await testController.expect(Selector('#remove-cart').exists).ok();
    await testController.click('#remove-cart');
  }
}

export const saveList = new Cart();
