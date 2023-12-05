import { Selector } from 'testcafe';

class ListJobStudent {
  constructor() {
    this.pageId = '#listjob-student';
    this.pageSelector = Selector(this.pageId);
  }

  async pageIsDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async numberOfElements(testController) {
    const elemCount = Selector('column').count;
    await testController.expect(elemCount.gt(1));
  }

  async addToCart(testController) {
    await testController.expect(Selector('#add-cart').exists).ok();
    await testController.click('#add-cart');
  }
}

export const listJobStudent = new ListJobStudent();
