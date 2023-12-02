import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { listJobStudent } from './listjobstudent.page';
import { listJobCompany } from './listjobcompany.page';
import { roleAssign } from './roleassign.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const companyCreds = { username: 'company@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

// Testing role assignment page
test('Testing Role Assignment page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoRoleAssign(testController);
  await roleAssign.pageIsDisplayed(testController);
  await roleAssign.userHasRole(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
});

// Testing that list jobs for students work
test('Testing Job Listing page for students', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.goToJobListStudent(testController);
  await listJobStudent.pageIsDisplayed(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
});

test('Testing Job Listing page for companies', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, companyCreds.username, companyCreds.password);
  await navBar.goToJobListCompany(testController);
  await listJobCompany.pageIsDisplayed(testController);
  await navBar.isLoggedIn(testController, companyCreds.username);
  await navBar.logout(testController);
});
