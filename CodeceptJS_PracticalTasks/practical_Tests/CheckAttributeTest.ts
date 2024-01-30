import { LoginPage } from "../Pages/LoginPage";
import { ClientSidePage } from "../Pages/ClientSidePage";
import { EventAttributesPage } from "../Pages/EventAttributesPage";
import { ServerSidePage } from "../Pages/ServerSidePage";
import { randomInt } from "crypto";

Feature("CheckAttributeTest");

Scenario("PZ22 @C02202 CheckAttributeTest", ({ I }) => {
  const loginPage = new LoginPage(I);
  const clientSidePage = new ClientSidePage(I);
  const serverSidePage = new ServerSidePage(I);
  const eventAttributesPage = new EventAttributesPage(I);
  loginPage.login();
  I.waitForVisible(clientSidePage.eventStreamTab, 120);
  I.click(clientSidePage.eventStreamTab);
  I.switchToNextTab();
  I.waitForElement(serverSidePage.eventStoreBarChartContainer, 120);
  I.click(eventAttributesPage.eventAttributesTab);
  I.waitForVisible(eventAttributesPage.eventStreamEventAttributesHeader, 20);
  I.click(eventAttributesPage.addAttributeButton);
  [eventAttributesPage.addAttributeModalHeader, eventAttributesPage.dataTypesContainer].forEach(
    (side: string): void => {
      eventAttributesPage.checkAndContinue(side);
    },
  );
  I.waitForElement(eventAttributesPage.headerAttributeDetails, 3);
  const attributeName: string = "TestAttribute" + randomInt(100);
  I.fillField(eventAttributesPage.nameInputField, attributeName);
  I.click(eventAttributesPage.getCommonButtonWithDiv(eventAttributesPage.finishButton));
  eventAttributesPage.closeModalWindow();
  I.waitForVisible(eventAttributesPage.eventsMainContainer, 30);
  I.dontSeeElement(eventAttributesPage.bulkActionsMenu);
  I.scrollTo(eventAttributesPage.getAttributeRowInTableLocator(attributeName));
  I.click(eventAttributesPage.getAttributeRowCheckbox(attributeName));
  eventAttributesPage.closeModalWindow();
  I.seeCheckboxIsChecked(eventAttributesPage.getAttributeRowCheckbox(attributeName));
  I.scrollTo(eventAttributesPage.bulkActionsMenu);
  I.click(eventAttributesPage.bulkActionsMenu);
  I.checkOption(eventAttributesPage.bulkActionsMenuRestrictedDataCheckbox);
  I.click(eventAttributesPage.bulkActionsMenuApplyButton);
  I.scrollTo(eventAttributesPage.getAttributeRowFaCheck(attributeName));
  I.seeElement(eventAttributesPage.getAttributeRowFaCheck(attributeName));
});
