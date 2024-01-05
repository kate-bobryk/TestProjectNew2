import { LoginPage } from "./LoginPage";
import { ClientSidePage } from "./ClientSidePage";

Feature("main");

Scenario("PZ21 @C02101 LoginTest", async ({ I }) => {
  const loginPage = new LoginPage(I);
  const clientSidePage = new ClientSidePage();
  I.amOnPage("");
  I.waitForVisible(loginPage.loginForm, 5);
  await loginPage.assertNumbersOfVisibleElements(loginPage.clientSideLoginContainer, 1);
  await loginPage.assertNumbersOfVisibleElements(loginPage.serverSideLoginContainer, 6);
  loginPage.checkElements(await I.grabTextFromAll(loginPage.serverSideLoginContainer), false);
  loginPage.checkElements([await I.grabAttributeFrom(loginPage.clientSideLoginContainer, "title")]);
  I.click(loginPage.loginButton);
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  loginPage.fillEmailField("user1@tealium.com");
  I.click(loginPage.loginButton);
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  loginPage.fillPasswordField("Password!23");
  I.click(loginPage.loginButton);
  I.waitForInvisible(loginPage.loginForm, 30);
  I.waitForElement(clientSidePage.profileMenuContainer, 30);
  I.waitForVisible(clientSidePage.clientSideMainContainer, 30);
  I.waitForVisible(clientSidePage.serverSideMainContainer, 30);
});
