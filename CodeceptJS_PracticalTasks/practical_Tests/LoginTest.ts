import { LoginPage } from "../Pages/LoginPage";
import { ClientSidePage } from "../Pages/ClientSidePage";

Feature("LoginTest");

Scenario("PZ21 @C02101 LoginTest", async ({ I }) => {
  const loginPage = new LoginPage(I);
  const clientSidePage = new ClientSidePage(I);
  I.amOnPage("");
  I.waitForVisible(loginPage.loginForm, 5);
  await loginPage.assertNumbersOfVisibleElements(loginPage.getClientAndServerSideLocator("iq"), 1);
  await loginPage.assertNumbersOfVisibleElements(loginPage.getClientAndServerSideLocator("as"), 6);
  loginPage.checkElements(await I.grabTextFromAll(loginPage.getClientAndServerSideLocator("as")), false);
  loginPage.checkElements([await I.grabAttributeFrom(loginPage.getClientAndServerSideLocator("iq"), "title")]);
  I.click(loginPage.loginButton);
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  loginPage.fillEmailField("user1@tealium.com");
  I.click(loginPage.loginButton);
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  loginPage.fillPasswordField("Password!23");
  I.click(loginPage.loginButton);
  const arr = [];
  I.usePlaywrightTo("grab all requests", async ({ page }) => {
    await page.on("request", (request) => {
      if (request.url().includes("login")) {
        arr.push(request.url());
      }
    });
  });
  console.log(arr);
  I.waitForInvisible(loginPage.loginForm, 30);
  I.waitForElement(clientSidePage.profileMenuContainer, 30);
  I.waitForVisible(clientSidePage.clientSideMainContainer, 30);
  I.waitForVisible(clientSidePage.serverSideMainContainer, 30);
});
