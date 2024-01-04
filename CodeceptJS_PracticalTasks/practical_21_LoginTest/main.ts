import { LoginPage } from "./LoginPage";
import { ClientSidePage } from "./ClientSidePage";

Feature("main");

Scenario("PZ21 @C02101 LoginTest", async ({ I }) => {
  const loginPage = new LoginPage(I);
  const clientSidePage = new ClientSidePage();
  //открыть страницу логина;
  I.amOnPage("");
  //проверить что видна форма для авторизации;
  I.waitForVisible(loginPage.loginForm, 5); //лучше использовать для подвисаний (по умолчанию сек)
  //проверить что в CS 1 подпункт, а в SS 6;
  await loginPage.assertNumbersOfVisibleElements(loginPage.clientSideLoginContainer, 1);
  await loginPage.assertNumbersOfVisibleElements(loginPage.serverSideLoginContainer, 6);
  //проверить что все названия вкладок в CS и SS отображаются правильно (нет ошибок типа EvEnTStrEAm и т.д.);
  //(проверить проход по масиву server side c проверкой по циклам по каждому элемента);
  const serverSide = await I.grabTextFromAll(loginPage.serverSideLoginContainer);
  loginPage.checkElements(serverSide, false);
  const clientSide = await I.grabAttributeFrom(loginPage.clientSideLoginContainer, "title"); //проверить валидный ли локатор!
  loginPage.checkElements([clientSide]);
  //кликнуть на кнопку Login;
  I.click(loginPage.loginButton);
  //проверить что появилось сообщение "Please include a valid email address.";
  I.waitForVisible(loginPage.errorMessage, 10);
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  //ввести логин user1@tealium.com;
  loginPage.fillEmailField("user1@tealium.com");
  //кликнуть на кнопку Login;
  I.click(loginPage.loginButton);
  //проверить что появилось сообщение "Invalid Password";
  loginPage.checkErrorMessage(await I.grabTextFrom(loginPage.errorMessage));
  //ввести пароль Password!23;
  loginPage.fillPasswordField("Password!23");
  //кликнуть на кнопку Login;
  I.click(loginPage.loginButton);
  //проверить что пропала форма логина и открылась главная страница CS;
  //(I wait for invisible/I wait for visible + I see element);
  I.waitForInvisible(loginPage.loginForm, 30);
  I.waitForElement(clientSidePage.profileMenuContainer, 30);
  I.waitForVisible(clientSidePage.clientSideMainContainer, 30);
  I.waitForVisible(clientSidePage.serverSideMainContainer, 30);
});
