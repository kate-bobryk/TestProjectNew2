import { LoginPage } from "../Pages/LoginPage";
import { ClientSidePage } from "../Pages/ClientSidePage";
import { ServerSidePage } from "../Pages/ServerSidePage";

Feature("TabsTest");

Scenario.skip("PZ22 @C02201 TabsTest", async ({ I }): Promise<void> => {
  const loginPage = new LoginPage(I);
  const clientSidePage = new ClientSidePage(I);
  const serverSidePage = new ServerSidePage(I);
  loginPage.login();
  I.waitForVisible(clientSidePage.clientSideMainContainer, 120);
  const accountName = "kbobryk-test";
  const profileName = "main";
  clientSidePage.chooseOption(accountName, profileName, "Latest Version");
  I.waitForElement(clientSidePage.eventStreamTab, 10);
  I.click(clientSidePage.eventStreamTab);
  I.switchToNextTab();
  serverSidePage.checkPage(serverSidePage.eventStoreBarChartContainer, `account=${accountName}&profile=${profileName}`);
  I.click(serverSidePage.adminMenuButton);
  //TODO: check why logout request aren't found
  await I.usePlaywrightTo("logout", async ({ page }) => {
    await Promise.all([
      page.click(serverSidePage.logOutOption["xpath"]),
      page.waitForRequest((request) => {
        request.url().includes("logout") && request.method() === "POST";
      }, 90),
    ]);
  });
  loginPage.checkPage(loginPage.loginForm);
  I.switchToPreviousTab();
  loginPage.checkPage(loginPage.loginForm);
});
