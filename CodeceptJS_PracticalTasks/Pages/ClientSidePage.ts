import { LocatorsCSPage } from "./Locators";
import LocatorOrString = CodeceptJS.LocatorOrString;
import { BasePage } from "./BasePage";
import { ButtonsTitles } from "./Fixtures";
import { id, xpath } from "./Decorators";

export class ClientSidePage extends BasePage {
  @id
  public readonly serverSideMainContainer = LocatorsCSPage.serverSideMainContainer;
  @id
  public readonly clientSideMainContainer = LocatorsCSPage.clientSideMainContainer;
  @id
  public readonly profileMenuContainer = LocatorsCSPage.profileMenuContainer;
  @id
  public readonly eventStreamTab = LocatorsCSPage.eventStreamTab;
  @xpath
  public readonly loadingWindow = LocatorsCSPage.loadingWindow;
  @xpath
  private readonly profileMenuButton = LocatorsCSPage.profileMenuButton;
  private readonly _accountProfileLocator = LocatorsCSPage.accountProfileLocator;
  private readonly profileMenuOption = LocatorsCSPage.profileMenuOption;

  public chooseOption(accountOption: string, profileOption: string, version: string): void {
    this.I.waitForInvisible(this.loadingWindow, 90);
    this.I.waitForEnabled(this.profileMenuButton, 90);
    this.I.click(this.profileMenuButton);
    this.I.click(this.getProfileMenuOptions("account"));
    this.I.fillField(this.getProfileMenuOptions("account"), accountOption);
    this.I.waitForVisible(this.getAccountProfileLocator(accountOption), 10);
    this.I.click(this.getAccountProfileLocator(accountOption));
    this.I.click(this.getProfileMenuOptions("profile"));
    this.I.fillField(this.getProfileMenuOptions("profile"), profileOption);
    this.I.pressKey(["ArrowDown", "Enter"]);
    this.I.pressKey("Enter");
    this.I.click(this.getProfileMenuOptions("revision"));
    this.I.click(this.getAccountProfileLocator(version));
    this.I.click(this.getCommonButtonWithDiv(ButtonsTitles.loadVersionButton));
  }
  public getAccountProfileLocator(element: string): LocatorOrString {
    return { xpath: this._accountProfileLocator.replace("testValue", element) };
  }

  getProfileMenuOptions(element: string): LocatorOrString {
    return { xpath: this.profileMenuOption.replace("testValue", element) };
  }
}
