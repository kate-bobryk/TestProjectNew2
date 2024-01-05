import { LocatorsLoginPage } from "./Locators";
import LocatorOrString = CodeceptJS.LocatorOrString;
import { xpath } from "./Decorators";

export class LoginPage {
  @xpath
  public readonly loginForm = LocatorsLoginPage.loginForm;
  @xpath
  public readonly emailInput = LocatorsLoginPage.emailInput;
  @xpath
  public readonly passwordInput = LocatorsLoginPage.passwordInput;
  @xpath
  public readonly loginButton = LocatorsLoginPage.loginButton;
  @xpath
  public readonly errorMessage = LocatorsLoginPage.errorMessage;
  @xpath
  public readonly clientSideLoginContainer = LocatorsLoginPage.clientSideLoginContainer;
  @xpath
  public readonly serverSideLoginContainer = LocatorsLoginPage.serverSideLoginContainer;
  private I: CodeceptJS.I;

  public constructor(I: CodeceptJS.I) {
    this.I = I;
  }
  public fillEmailField(email: string): void {
    this.I.fillField(this.emailInput, email);
  }
  public fillPasswordField(password: string): void {
    this.I.fillField(this.passwordInput, password);
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
  public checkErrorMessage(text: string): void {
    this.I.waitForVisible(this.errorMessage, 10);
    this.I.assert(
      text === "Please include a valid email address." || text === "Invalid Password",
      true,
      `Invalid text: ${text}`,
    );
  }
}
