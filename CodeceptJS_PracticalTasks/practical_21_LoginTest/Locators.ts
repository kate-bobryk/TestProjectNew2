export enum LocatorsLoginPage {
  loginForm = "//div[@class='loginForm']",
  emailInput = "//div[@id='email_input']//input[@id='email']",
  passwordInput = "//div[@id='password_input']//input[@id='password']",
  loginButton = "//*[@id='loginBtn']",
  errorMessage = "//div[@class='formFieldInputError']",
  clientSideLoginContainer = "//li[@class='selected']//div[@class='productItem']",
  serverSideLoginContainer = "//li[@data-product='as']//div[@class='productItem']",
}

export enum LocatorsCSPage {
  profileMenuContainer = "//div[@id='profile_menu_container']",
  clientSideMainContainer = "//ul[@id='navCategoryClientProduct']",
  serverSideMainContainer = "//ul[@id='navCategoryServerProduct']",
}
