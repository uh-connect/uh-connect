import { Selector } from 'testcafe';

class ListjobCompany {
  constructor() {
    this.pageId = '#listjob-company';
    this.pageSelector = Selector(this.pageId);
  }

  async pageIsDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async numberOfElements(testController) {
    const elemCount = Selector('column').count;
    await testController.expect(elemCount.gt(1));
  }
}

export const listJobCompany = new ListjobCompany();
