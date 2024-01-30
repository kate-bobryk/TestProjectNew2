import { LocatorsSSPage } from "./Locators";
import { data_test, xpath } from "./Decorators";
import { BasePage } from "./BasePage";

export class ServerSidePage extends BasePage {
  @xpath
  public readonly eventStreamLiveEventsTitle = LocatorsSSPage.eventStreamLiveEventsTitle;
  @xpath
  public readonly eventStoreBarChartContainer = LocatorsSSPage.eventStoreBarChartContainer;
  @data_test
  public readonly adminMenuButton = LocatorsSSPage.adminMenuButton;
  @data_test
  public readonly logOutOption = LocatorsSSPage.logOutOption;
}
