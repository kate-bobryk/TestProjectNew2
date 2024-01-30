import { LocatorsLoginPage } from "./Locators";
import LocatorOrString = CodeceptJS.LocatorOrString;
import { id, xpath } from "./Decorators";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  @xpath
  public readonly loginForm = LocatorsLoginPage.loginForm;
  @id
  public readonly loginButton = LocatorsLoginPage.loginButton;
  @xpath
  public readonly errorMessage = LocatorsLoginPage.errorMessage;
  private readonly _emailAndPasswordInput = LocatorsLoginPage.emailAndPasswordInput;
  private readonly _clientAndServerSideContainerLocator = LocatorsLoginPage.clientAndServerSideContainer;

  public getEmailPasswordLocator(attribute: string): LocatorOrString {
    return { xpath: this._emailAndPasswordInput.replace("testValue", attribute) };
  }

  public getClientAndServerSideLocator(attribute: string): LocatorOrString {
    return { xpath: this._clientAndServerSideContainerLocator.replace("testValue", attribute) };
  }
  public fillEmailField(email: string): void {
    this.I.fillField(this.getEmailPasswordLocator("email"), email);
  }
  public fillPasswordField(password: string): void {
    this.I.fillField(this.getEmailPasswordLocator("password"), password);
  }
  public async assertNumbersOfVisibleElements(element: LocatorOrString, count: number): Promise<void> {
    this.I.assert(await this.I.grabNumberOfVisibleElements(element), count, `Wrong count, must be ${count} elements`);
  }
  public checkElements(arr: string[], isClientSide: boolean = true): void {
    let checkArr: string[];
    if (isClientSide) {
      checkArr = ["iQ Tag Management"];
    } else {
      checkArr = ["EventStream", "AudienceStream", "DataAccess", "Predict", "Functions", "Data Connect"];
    }
    for (let i: number = 0; i < arr.length; i++) {
      this.I.assert(checkArr.includes(arr[i]), true, `${arr[i]} is not visible.`);
    }
  }
  public login(email: string = "user1@tealium.com", password: string = "Password!23"): void {
    this.I.amOnPage("");
    this.I.waitForVisible(this.loginForm);
    this.I.fillField(this.getEmailPasswordLocator("email"), email);
    this.I.fillField(this.getEmailPasswordLocator("password"), password);
    this.I.click(this.loginButton);
    this.I.waitForInvisible(this.loginForm, 5);
  }
  public checkErrorMessage(text: string): void {
    this.I.assert(
      text === "Please include a valid email address." || text === "Invalid Password",
      true,
      `Invalid text: ${text}`,
    );
  }
}
