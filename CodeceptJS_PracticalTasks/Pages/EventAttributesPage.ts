import { LocatorsEAPage } from "./Locators";
import LocatorOrString = CodeceptJS.LocatorOrString;
import { BasePage } from "./BasePage";
import { ButtonsTitles } from "./Fixtures";
import { data_test, data_testid, xpath } from "./Decorators";

export class EventAttributesPage extends BasePage {
  @xpath
  public readonly eventStreamEventAttributesHeader = LocatorsEAPage.eventStreamEventAttributesHeader;
  @xpath
  public readonly addAttributeModalHeader = LocatorsEAPage.addAttributeModalHeader;
  @xpath
  public readonly dataTypesContainer = LocatorsEAPage.dataTypesContainer;
  @xpath
  public readonly headerAttributeDetails = LocatorsEAPage.headerAttributeDetails;
  @xpath
  private readonly attributesDetailsPopUp = LocatorsEAPage.attributesDetailsPopUp;
  @xpath
  public readonly eventsMainContainer = LocatorsEAPage.eventsMainContainer;
  @xpath
  public readonly restrictedDataCheck = LocatorsEAPage.restrictedDataCheck;
  @data_test
  public readonly eventAttributesTab = LocatorsEAPage.eventAttributesTab;
  @data_test
  public readonly addAttributeButton = LocatorsEAPage.addAttributeButton;
  @data_test
  public readonly nameInputField = LocatorsEAPage.nameInputField;
  public readonly finishButton = ButtonsTitles.finishButton;
  @data_test
  private readonly closeAttributesDetailsPopUpButton = LocatorsEAPage.closeAttributesDetailsPopUpButton;
  @data_test
  public readonly bulkActionsMenu = LocatorsEAPage.bulkActionsMenu;
  @data_test
  public readonly bulkActionsMenuApplyButton = LocatorsEAPage.bulkActionsMenuApplyButton;
  @data_testid
  public readonly bulkActionsMenuRestrictedDataCheckbox = LocatorsEAPage.bulkActionsMenuRestrictedDataCheckbox;
  private readonly _continueButton = ButtonsTitles.continueButton;
  private readonly _attributeRowInTable = LocatorsEAPage.attributeRowInTable;
  private readonly _attributeCheckboxEventTable = LocatorsEAPage.attributeCheckboxEventTable;
  private readonly _restrictedDataCheck = LocatorsEAPage.restrictedDataCheck;

  public closeModalWindow(): void {
    this.I.waitForVisible(this.attributesDetailsPopUp, 30);
    const modalElements = Number(this.I.grabNumberOfVisibleElements(this.attributesDetailsPopUp));
    if (modalElements != 0) {
      this.I.click(this.closeAttributesDetailsPopUpButton);
    }
  }
  public checkAndContinue(element): void {
    this.I.waitForElement(element, 10);
    this.I.click(this.getCommonButtonWithDiv(this._continueButton));
  }

  public getAttributeRowInTableLocator(attribute: string): LocatorOrString {
    return { xpath: this._attributeRowInTable.replace("testValue", attribute) };
  }

  public getAttributeRowCheckbox(attribute: string): LocatorOrString {
    return { xpath: this.getAttributeRowInTableLocator(attribute)["xpath"] + this._attributeCheckboxEventTable };
  }

  public getAttributeRowFaCheck(attribute: string): LocatorOrString {
    return { xpath: this.getAttributeRowInTableLocator(attribute)["xpath"] + this._restrictedDataCheck };
  }
}
