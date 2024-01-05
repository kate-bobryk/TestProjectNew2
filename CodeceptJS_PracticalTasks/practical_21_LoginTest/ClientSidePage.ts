import { LocatorsCSPage } from "./Locators";
import { xpath } from "./Decorators";

export class ClientSidePage {
  @xpath
  public readonly serverSideMainContainer = LocatorsCSPage.serverSideMainContainer;
  @xpath
  public readonly clientSideMainContainer = LocatorsCSPage.clientSideMainContainer;
  @xpath
  public readonly profileMenuContainer = LocatorsCSPage.profileMenuContainer;
}
