import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { listJobStudent } from './listjobstudent.page';
import { listJobCompany } from './listjobcompany.page';
import { roleAssign } from './roleassign.page';
import { saveList } from './cart.page';
import { foot } from './footer.component';
import { profile } from './profiles.page';

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

// Testing Profiles pages
test('Testing Profile pages for student', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.goToPreviewProfiles(testController);
  await profile.pageIsDisplayedStudent(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
});

test('Testing Profile pages for company', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, companyCreds.username, companyCreds.password);
  await navBar.goToProfiles(testController);
  await navBar.logout(testController);
});

// Testing the shopping cart
test('Testing Shopping Cart for Students', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.goToJobListStudent(testController);
  await listJobStudent.pageIsDisplayed(testController);
  await listJobStudent.addToCart(testController);
  await navBar.goToCart(testController);
  await saveList.removeFromCartStudent(testController);
});

test('Testing Shopping Cart for Companies', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, companyCreds.username, companyCreds.password);
  await navBar.goToProfiles(testController);
  await profile.pageIsDisplayedCompany(testController);
  await profile.addToCart(testController);
  await navBar.goToCart(testController);
  await saveList.removeFromCartCompany(testController);
});

// Testing the footer component
test('Testing footer link for Github', async (testController) => {
  await foot.goToFaq(testController);
  await foot.goToAbout(testController);
  await foot.goToTerms(testController);
  await foot.goToGitHub(testController);
});

// Have to split up this from above because goToGithub goes to external site
test('Testing project page', async (testController) => {
  await foot.goToProjectPage(testController);
});
