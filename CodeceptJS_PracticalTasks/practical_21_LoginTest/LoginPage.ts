import { LocatorsLoginPage } from "./locators";
import LocatorOrString = CodeceptJS.LocatorOrString;

export class LoginPage {
  public readonly loginForm = { xpath: LocatorsLoginPage.loginForm };
  public readonly emailInput = { xpath: LocatorsLoginPage.emailInput };
  public readonly passwordInput = { xpath: LocatorsLoginPage.passwordInput };
  public readonly loginButton = { xpath: LocatorsLoginPage.loginButton };
  public readonly errorMessage = { xpath: LocatorsLoginPage.errorMessage };
  public readonly clientSideLoginContainer = { xpath: LocatorsLoginPage.clientSideLoginContainer };
  public readonly serverSideLoginContainer = { xpath: LocatorsLoginPage.serverSideLoginContainer };
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
    if (text) {
      text === "Please include a valid email address." || text === "Invalid Password";
    } else `Invalid text: ${text}`;
  }
}
