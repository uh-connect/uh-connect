import { Selector } from 'testcafe';

class RoleAssign {
  constructor () {
    this.pageId = '#roleassign-page';
    this.pageSelector = Selector(this.pageId);
  }

  async pageIsDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async userHasRole(testController) {
    await testController.expect('#student-list').ok();
  }
}

export const roleAssign = new RoleAssign();
