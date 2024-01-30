export enum LocatorsLoginPage {
  loginForm = "//div[@class='loginForm']",
  emailAndPasswordInput = "//input[@id='testValue']",
  loginButton = "loginBtn",
  errorMessage = "//div[@class='formFieldInputError']",
  clientAndServerSideContainer = "//*[@data-product='testValue']//*[@class='productItem']",
}

export enum LocatorsCSPage {
  profileMenuContainer = "profile_menu_container",
  clientSideMainContainer = "navCategoryClientProduct",
  serverSideMainContainer = "navCategoryServerProduct",
  loadingWindow = "//div[@id='loadingDialogInner']",
  //TODO: find correct locator for profile switcher
  profileMenuButton = "//div[@class='nui-navbar-item nui-profile-switcher']", //"//button[@id='profile_menu_button']", //"//div[@class='productProfile_caret']/*[@class='fa fa-caret-down']",
  accountProfileLocator = "//span[text()='testValue']",
  profileMenuOption = "//*[@data-testid='testValueDropDown-textbox']",
  eventStreamTab = "nav_section_event_stream",
}

export enum LocatorsSSPage {
  eventStreamLiveEventsTitle = "//div[contains(@class, 'header-page-container')]",
  eventStoreBarChartContainer = "//div[@class='eventStoreBarChartContainer']",
  adminMenuButton = "admin-menu-btn",
  logOutOption = "logout",
}

export enum LocatorsEAPage {
  eventStreamEventAttributesHeader = "//div[contains(@class, 'header-page-container')]",
  eventAttributesTab = "nav_section_event_attributes",
  addAttributeButton = "add-attribute-button",
  addAttributeModalHeader = "//div[@class='modal-heading modalHeader']",
  dataTypesContainer = "//div[@class='sectionTitle first']",
  headerAttributeDetails = "//div[@class='header-title-details']",
  nameInputField = "attribute-name",
  attributesDetailsPopUp = "//div[@class='quantifierDetails']",
  closeAttributesDetailsPopUpButton = "slide_out_panel_close_icon",
  eventsMainContainer = "//div[@class='main-container']",
  attributeCheckboxEventTable = "//input[@name='bulkEditAttribute']",
  attributeRowInTable = "//span[contains(text(), 'testValue')]//ancestor::div[@data-test='accordion-header']",
  bulkActionsMenu = "quantifiers_bulk_property_menu",
  bulkActionsMenuRestrictedDataCheckbox = "isPersonalInfo_checkbox",
  bulkActionsMenuApplyButton = "bulk_actions_menu_apply_button",
  restrictedDataCheck = "//*[contains(@class, 'fa-check')]",
}
