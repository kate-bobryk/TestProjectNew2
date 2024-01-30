import LocatorOrString = CodeceptJS.LocatorOrString;

export abstract class BasePage {
  public I: CodeceptJS.I;
  public constructor(I: CodeceptJS.I) {
    this.I = I;
  }
  public checkPage(element: LocatorOrString, url: string = "https://qa-stage-my.tealiumiq.com/"): void {
    this.I.waitForElement(element, 150);
    this.I.seeInCurrentUrl(url);
  }
  public getCommonButtonWithDiv(buttonTitle: string): LocatorOrString {
    return { xpath: `//div[contains(text(), '${buttonTitle}')]` };
  }
}
