Feature("main");

Scenario("PZ20 @C02001 CodeceptJS Methods", async ({ I }) => {
  //amOnPage - opens a web page in a browser, requires relative or absolute url;
  //parameters: url string, url path or global url;
  //I.amOnPage('/'); // opens main page of website
  //I.amOnPage('https://github.com'); // opens github
  //I.amOnPage('/login'); // opens a login page
  I.amOnPage("");

  //clearField - clears the text input element: <input>, <textarea> or [contenteditable];
  //if this doesn't work use force option { force: true });
  //parameter: "locator" - (string | object) field located by label|name|CSS|XPath|strict locator;
  //parameter: "options" - any? for available options object as 2nd argument;
  I.clearField('[data-test="emailInputTest"]'); //text from "Email" file was delete;

  //click - click on a link or a button, given by a locator;
  //parameter: "locator" - (string | object), clickable link or button located by text, or any element located by CSS|XPath|strict locator;
  //parameter: "context" - (string? | object | null) (optional, null by default) element to search in CSS|XPath|Strict locator;
  //parameter: "options" - any? for click available as 3rd argument, examples: I.click('canvas', '.model', { position: { x: 20, y: 40 } });
  I.click("#loginBtn, .btn btn-primary"); //css selector of "Login" button;

  //dontSee - opposite to see, checks that a text is not present on a page (use context parameter to narrow down the search);
  //parameter: "text" as "string" which is not present;
  //parameter: "context" - (string | object)? element located by CSS|XPath|strict locator in which to perform search;
  I.dontSee("password", '[data-test="passwordInputTest"]'); //check that text isn't exist in "Password" field;

  //fillField - fills a text field or textarea, after clearing its value, with the given string (field is located by name, label, CSS, or XPath);
  //parameter: "field" - (string| object) located by label|name|CSS|XPath|strict locator;
  //parameter: "value" - (string| object) text value to fill;
  //example 1:
  I.fillField("//div[@id='email_input']//input[@id='email']", "user1@tealium.com"); // input email;
  I.fillField("//div[@id='password_input']//input[@id='password']", "Password!23"); // input password;

  //dontSeeElement - opposite to seeElement, checks that element is not visible (or in DOM);
  //parameter: "locator" - (string | object) located by CSS|XPath|Strict locator;
  pause();
  I.dontSeeElement("//span[@class='breadcrumbs-level1 js-topnav-title']"); //checks that element from main page isn't displayed;

  //grabAttributeFrom - retrieves an attribute from an element located by CSS or XPath and returns it to test;
  //should be used inside async with await operator;
  //if more than one element is found - attribute of first element is returned;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "attr" - string attribute name;
  await I.grabAttributeFrom("//div[@class='productItem']", "title"); //iQ Tag Management

  //grabAttributeFromAll - retrieves an array of attributes from elements located by CSS or XPath and returns it to test;
  //should be used inside async with await operator;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "attr" - string attribute name;
  await I.grabAttributeFromAll('//div[@class="productItem"]', "title"); //iQ Tag Management,EventStream,AudienceStream,DataAccess,Predict,Functions,DataConnect,Tealium Learning Center,Tealium Support Desk

  //grabNumberOfVisibleElements - grab number of visible elements by locator;
  //should be used inside async function with await operator;
  //parameter: "locator" - (string| object) located by CSS|XPath|strict locator;
  //const count = await I.grabNumberOfVisibleElements('[data-test="udhLogin"]'); //1;
  I.assert(await I.grabNumberOfVisibleElements('[data-test="udhLogin"]'), 1, "Wrong count");
  await I.grabNumberOfVisibleElements("//li[@data-product='as']//div[@class='productItem']"); //6;
  await I.grabNumberOfVisibleElements('//li[@class="selected"]//div[@class="productItem"]'); //1 (only client side block);
  pause();

  //grabTextFrom - retrieves a text from an element located by CSS or XPath and returns it to test;
  //should be used inside async with await operator;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  await I.grabTextFrom("//li[@data-product='as']//div[@class='productItem'][2]"); //AudienceStream;

  //grabTextFromAll - retrieves all texts from an element located by CSS or XPath and returns it to test;
  //should be used inside async with await operator;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  await I.grabTextFromAll('//div[@class="loginForm"]');
  //Email
  //Password
  //Remember Email
  //Forgot Password?
  //Login
  //SSO Login
  //Language

  //grabTitle - retrieves a page title and returns it to test;
  //should be used inside async with await operator;
  //returns Promise <string> title;
  await I.grabTitle(); //Tealium Login;

  //grabValueFrom - retrieves a value from a form element located by CSS or XPath and returns it to test;
  //should be used inside async function with await operator;
  //if more than one element is found - value of first element is returned;
  //parameter: "locator" - (string| object) field located by label|name|CSS|XPath|strict locator;
  await I.grabValueFrom("//div[@id='email_input']//input[@id='email']"); //user1@tealium.com

  //grabValueFromAll - retrieves an array of value from a form located by CSS or XPath and returns it to test;
  //should be used inside async function with await operator;
  //parameter: "locator" - (string| object) field located by label|name|CSS|XPath|strict locator;
  //returns Promis <Array<string>> attribute value;
  await I.grabValueFromAll("//div[@id='password_input']//input[@id='password']"); //Password!23

  //moveCursorTo - moves cursor to element matched by locator, extra shift can be set with offsetX and offsetY options;
  //parameter: "locator" - (string| object) located by CSS|XPath|strict locator;
  //parameter: "offsetX" - number (optional, 0 by default) X-axis offset;
  //parameter: "offsetY"  - number (optional, 0 by default) Y-axis offset;
  I.moveCursorTo("//*[@title='Tealium Learning Center']");

  //pressKey - presses a key in the browser (on a focused element);
  //for populating text field or textarea, it is recommended to use fillField;
  //parameter: "key" - (string| Array<string>) key or array of keys to press;
  I.pressKey(["CommandOrControl", "R"]);

  //refreshPage - reload the current page;
  I.refreshPage();

  //scrollPageToBottom - scroll page to the bottom;
  I.scrollPageToBottom();

  //scrollPageToTop - scroll page to the top;
  I.scrollPageToTop();

  //scrollTo - scrolls to element matched by locator, extra shift can be set with offsetX and offsetY options;
  //parameter: "locator" - (string| object) located by CSS|XPath|strict locator;
  //parameter: "offsetX" - number (optional, 0 by default) X-axis offset;
  //parameter: "offsetY" - number (optional, 0 by default) Y-axis offset;
  I.scrollTo("//span[@data-type='metric' and contains(text(), 'Average visit duration in minutes')]");

  //see - checks that a page contains a visible text, use context parameter to narrow down the search;
  //parameter: "text" - string expected on page;
  //parameter: "context" - (string? | object) (optional, null by default) element located by CSS|Xpath|strict locator in which to search for text;
  I.amOnPage("");
  I.see("Tealium Learning Center"); //check pls in login page;

  //seeElement - checks that a given element is visible element is located by CSS or XPath;
  //parameter: "locator" - (string| object) located by CSS|XPath|strict locator;
  I.seeElement("//div[@class='sso_selector']"); //check pls in login page;

  //seeNumberOfElements - asserts that an element appears a given number of times in the DOM, element is located by label or name or CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "num" - number of elements;
  I.seeNumberOfElements("//li[@data-product='as']//div[@class='productItem']", 6); //check pls in login page;

  //seeNumberOfVisibleElements - asserts that an element is visible a given number of times, element is located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "num" - number of elements;
  I.seeNumberOfVisibleElements("//div[@class='loginForm']", 8); //check pls in login page;

  //seeTextEquals - checks that text is equal to provided one;
  //parameter: "text" - string element value to check;
  //parameter: "context" - (string| object)? element located by CSS|XPath|strict locator;
  I.seeTextEquals("Remember Email", "//span[@data-i18n='login.form.remember']"); //check pls in login page;

  //seeTitleEquals - checks that title is equal to provided one;
  //parameter: "text" - string value to check;
  I.seeTitleEquals("Data Connect"); //check pls in login page;

  //wait - pauses execution for a number of seconds;
  //parameter: "sec" - number of second to wait;
  I.wait(5);

  //waitForClickable - waits for element to be clickable (by default waits for 1sec), element can be located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "waitTimeout";
  //parameter: "sec" - number? (optional, 1 by default) time in seconds to wait;
  I.waitForClickable("//div[@class='formHelpLinks']", 5); //check pls in login page;

  //waitForElement - waits for element to be present on page (by default waits for 1sec), element can be located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "sec" - number? (optional, 1 by default) time in seconds to wait;
  I.click("span[data-i18n='login.form.having_trouble']"); //click to "Forgot Password" button
  I.waitForElement("//div[@id='headline']", 10); //wait for "Login Assistance" header

  //waitForEnabled - waits for element to become enabled (by default waits for 1sec), element can be located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "sec" - number? (optional) time in seconds to wait, 1 by default;
  I.waitForEnabled("//a[@id='emailSubmitBtn']", 10);

  //waitForInvisible - waits for an element to be removed or become invisible on a page (by default waits for 1sec), element can be located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "sec" - number (optional, 1 by default) time in seconds to wait;
  I.waitForInvisible("//div[@class='loginForm']", 30);

  //waitForText - waits for a text to appear (by default waits for 1sec), element can be located by CSS or XPath;
  //narrow down search results by providing context;
  //parameter: "text" - string to wait for;
  //parameter: "sec" - number(optional, 1 by default) time in seconds to wait;
  //parameter: "context" - (string| object)? (optional) element located by CSS|XPath|strict locator;
  I.click("//a[@id='emailSubmitBtn']");
  I.waitForText("Email field cannot be left blank.", 5, "//div[@class='formFieldInputError']");

  //waitForValue - waits for the specified value to be in value attribute;
  //parameter: "field" - (string| object) input field;
  //parameter: "value" - string expected value;
  //parameter: "sec" - number (optional, 1 by default) time in seconds to wait;
  I.waitForValue("//div[@class='formFieldInputField']", "", 5);

  //waitForVisible - waits for an element to become visible on a page (by default waits for 1sec), element can be located by CSS or XPath;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "sec" - number (optional, 1 by default) time in seconds to wait;
  I.waitForVisible("//a[@id='emailSubmitBtn']", 5);

  //waitNumberOfVisibleElements - waits for a specified number of elements on the page;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "num" - number of elements;
  //parameter: "sec" - number (optional, 1 by default) time in seconds to wait;
  I.amOnPage("");
  //login in server side;
  I.waitNumberOfVisibleElements("//ul[@id='navCategoryServerProduct']", 1);

  //attachFile - attaches a file to element located by label, name, CSS or XPath Path to file is in current codecept directory;
  //parameter: "locator" (string | object) - field located by label|name|CSS|XPath|strict locator;
  //parameter: "pathToFile" string - local file path relative to codecept.conf.ts or codecept.conf.js config file;
  //I.attachFile("", "./serverSide/uploads/tools/file_import.csv");
  I.attachFile(
    "//*[@data-testid='upload_sample_file_step_file_uploader_file_input']",
    "./PracticalTasks/Examples/testUpload.csv",
  );

  //checkOption - selects a checkbox or radio button;
  //parameter: "field" - (string | object) checkbox located by label | name | CSS | XPath | strict locator;
  //parameter: context - (string ? | object ) (optional, null by default) element located by CSS | XPath | strict locator;
  //parameter: options (force, noWaitAfter, position, timeout, actionTimeout, trial, false);
  I.checkOption("//div[@class='formCheckboxInputField']//input[@id='persist']");

  //closeOtherTab - close all tabs except for the current one;
  I.closeOtherTab();

  //closeCurrentTab - close current tab and switches to previous;
  I.closeCurrentTab();

  //dontSeeCheckboxIsChecked - verifies that the specified checkbox is not checked;
  //parameter: "field" - (string | object) located by label|name|CSS|XPath|strict locator;
  I.amOnPage("");
  I.dontSeeCheckboxIsChecked("//div[@class='formCheckboxInputField']//input[@id='persist']");

  //dontSeeElementInDOM - opposite to seeElementInDOM, checks that element is not on page visible or not;
  //parameter: "locator" - (string | object) located by CSS|XPath|Strict locator;
  I.dontSeeElementInDOM("//div[@id='headline']");

  //doubleClick - performs a double-click on an element matched by link|button|label|CSS or XPath;
  //parameter: "locator" - (string | object) clickable link or button located by text, or any element located by CSS|XPath|strict locator;
  //parameter: "context" - (string ? | object) (optional, null by default) element to search in CSS|XPath|Strict locator;
  I.doubleClick("//div[@class='promo-content']");

  //dragAndDrop - drag an item to a destination element;
  //parameter: "srcElement" - (string | object ) located by CSS|XPath|strict locator;
  //parameter: "destElement" - (string | object) located by CSS|XPath|strict locator;
  //parameter: "options" - any? additional options (opens new window)can be passed as 3rd argument;
  //I.dragAndDrop();

  //focus - calls focus on the matching element;
  //parameter: "locator" - (string | object) field located by label|name|CSS|XPath|strict locator;
  //parameter: "options" - any? Playwright only: additional options for available options object as 2nd argument;
  //login;
  I.focus("//div[@data-test='variables_stats_card']");

  //forceClick - perform an emulated click on a link or a button, given by a locator (works on hidden, animated or inactive elements as well);
  //parameter: locator (string | object) clickable link or button located by text, or any element located by CSS|XPath|strict locator;
  //parameter: context (string? | object) (optional, null by default) element to search in CSS|XPath|Strict locator;
  I.forceClick("span[data-test='visits_tag_report_item_redirect_arrow_icon']");

  //grabBrowserLogs - get JS log from browser;
  //returns Promise <Array<any>>;
  I.grabBrowserLogs(); //[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object];
  // I.say("----------------------Step2-----------------------");
  // const logs = await I.grabBrowserLogs();
  // for (const logObj of logs) {
  //   await I.assertStringNotIncludes(logObj.text(), "TypeError");
  // }

  //grabCssPropertyFrom - grab CSS property for given locator Resumes test execution (if more than one element is found - value of first element is returned);
  //should be used inside an async function with await operator;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "cssProperty" - string CSS property name;
  await I.grabCssPropertyFrom("[data-test='saveProfileButton']", "background-color"); //rgb(250, 167, 49)

  //grabCssPropertyFromAll - grab array of CSS properties for given locator;
  //should be used inside an async function with await operator;
  //parameter: "locator" - (string| object) element located by CSS|XPath|strict locator;
  //parameter: "cssProperty" - string CSS property name;
  await I.grabCssPropertyFromAll("//div[@data-test='Platform']//input[@data-testid='filter-row-checkbox']", "color"); //на чекбоксы Data Sources > Platform
  //rgb(102, 102, 102),rgb(102, 102, 102),rgb(102, 102, 102);

  //grabCurrentUrl - get current URL from browser;
  //should be used inside an async function with await operator;
  await I.grabCurrentUrl(); //https://qa-stage-my.tealiumiq.com/tms?utk=35c2035d2a299979b18fa6cd7c63b402330d919e9cfc1a8c67

  //grabNumberOfOpenTabs - grab number of open tabs;
  //should be used inside an async function with await operator;
  await I.grabNumberOfOpenTabs(); //3

  //openNewTab - open new tab and automatically switched to new tab;
  //parameter: options;
  I.openNewTab();

  //pressKeyDown - presses a key in the browser and leaves it in a down state;
  //parameter: "key" - string name of key to press down;
  I.pressKeyDown("Control");
  I.pressKey("Tab");

  //pressKeyUp - releases a key in the browser which was previously set to a down state;
  //parameter: "key" - string name of key to press down;
  I.pressKeyUp("Control");

  //rightClick - performs right click on a clickable element matched by semantic locator, CSS or XPath;
  //parameter: "locator" - (string | object) clickable element located by CSS|XPath|strict locator;
  //parameter: "context" - (string ? | object) (optional, null by default) element located by CSS|XPath|strict locator;
  //go to login page;
  I.rightClick("span[data-i18n='login.form.remember']", "Remember Email");

  //saveScreenshot - saves a screenshot to ouput folder (set in codecept.conf.ts or codecept.conf.js);
  //optionally resize the window to the full available page scrollHeight and scrollWidth to capture the entire page by passing true in as the second argument;
  //parameter: "fileName" - string file name to save;
  //parameter: "fullPage" - boolean (optional, false by default) flag to enable fullscreen screenshot mode;
  I.saveScreenshot("testScreenshot");

  //seeAttributesOnElements - checks that all elements with given locator have given attributes;
  //parameter: "locator" - (string| object) located by CSS|XPath|strict locator;
  //parameter: "attributes" - object, attributes and their values to check;
  I.seeAttributesOnElements(
    "//ul[@id='navCategoryServerProduct']//li",
    "[@class='toplvl-menu-list-item js-main-nav-section']",
  );

  //seeCurrentUrlEquals - checks that current url is equal to provided one (if a relative url provided, a configured url will be prepended to it);
  //parameter: "url" - string, value to check;
  I.seeCurrentUrlEquals("https://qa-stage-my.tealiumiq.com/tms?utk=e573a9f5a4c522699f98070cae843222f1b44302478033b26c");

  //seeCheckboxIsChecked - verifies that the specified checkbox is checked;
  //parameter: "field" - (string | object) located by label|name|CSS|XPath|strict locator;
  I.click("li[data-tab='loadrules']");
  I.checkOption("//input[@data-testid='loadrules-select-header-check']");
  I.seeCheckboxIsChecked("//input[@data-testid='loadrules-select-header-check']");

  //seeElementInDOM - checks that a given Element is present in the DOM Element is located by CSS or XPath;
  //"locator" - (string| object) located by CSS|XPath|strict locator;
  I.seeElementInDOM("div[data-test='nav_iq_tag_mgmt']");

  //seeInCurrentUrl - checks that current url contains a provided fragment;
  //parameter: "url" - string, a fragment to check;
  I.seeInCurrentUrl("/tms?utk=0361e7f74ce42c85deba1f207dabb030e60e2aeed93ee5426b#/loadrules");

  //seeInField - checks that the given input field or textarea equals to given value (by label text, the "name" attribute, CSS, and XPath);
  //parameter: "field" - (string | object) located by label|name|CSS|XPath|strict locator;
  //parameter: "value" - (string | object) value to check;
  //open file upload in "Add Data Source" tab + fill field with "testUpload" value;
  I.seeInField("//input[@data-test='name-input']", "testUpload");

  //seeInTitle - checks that title contains text.
  //parameter: "text" - string, text value to check;
  //go to login page;
  I.seeInTitle("Tealium Login");

  //selectOption - selects an option in a drop-down select (provide an array for the second argument to select multiple options);
  //parameter: "select" - (string | object ) field located by label|name|CSS|XPath|strict locator;
  //parameter: "option" - (string | Array <any>) visible text or value of option;
  I.selectOption(
    "//ul[@class='submenu-list-menu expanded']//child::*[@data-test='nav_section_usage_reports']",
    "Usage Reports",
  );

  //switchTo - switches frame or in case of null locator reverts to parent;
  //parameter: "locator" (string? | object) (optional, null by default) element located by CSS|XPath|strict locator;
  I.switchTo({ xpath: "//*[@id='page_head_19487531de54b276b3a67f322bedf9ec']" });
  //click banner on login page;
  I.switchTo(); //switch back to main page;

  //switchToNextTab - switch focus to a particular tab by its number, it waits tabs loading and then switch tab;
  //parameter: "num" number;
  I.switchToNextTab(2);

  //switchToPreviousTab - switch focus to a particular tab by its number, it waits tabs loading and then switch tab;
  //parameter: "num" number;
  I.switchToPreviousTab(1);

  //type - types out the given text into an active field (to slow down typing use a second parameter);
  //should be used when fillField is not an option;
  //parameter: "keys" - (string | Array <string>) or array of keys to type;
  //parameter: "delay" - number ? (optional) delay in ms between key presses;
  //click/focus to search input row;
  I.type("Type test", 3);

  //uncheckOption - unselects a checkbox or radio button;
  //parameter: "field" - (string | object) checkbox located by label | name | CSS | XPath | strict locator;
  //parameter: "context" - (string ? | object) (optional, null by default) element located by CSS | XPath | strict locator;
  //parameter: "options" (force, noWaitAfter, position, timeout, actionTimeout, trial, false);
  //go to Sources > Data Sources, check option "File Import"
  I.uncheckOption("//input[@id='2edf0d7c-e92d-45e0-f77f-082c870bdac6']");

  //waitForDetached - waits for an element to become not attached to the DOM on a page (by default waits for 1sec);
  //parameter: "locator" - (string | object ) element located by CSS|XPath|strict locator;
  //parameter: "sec" - number (optional, 1 by default) time in seconds to wait;
  //switch from Data Sources to Event Stream > Live Events;
  I.waitForDetached("//button[@data-path='intro_data_sources']", 5);

  //waitForFunction - waits for a function to return true (waits for 1 sec by default);
  //parameter: "fn" - (string | function ) to be executed in browser context;
  //parameter: "argsOrSec" - (Array <any> | number)? (optional, 1 by default) arguments for function or seconds;
  //parameter: "sec" - number ? (optional, 1 by default) time in seconds to wait;
  function findUrl(): void {
    const curUrl = this._getPageUrl();
    return curUrl;
  }
  I.waitForFunction((): void => findUrl(), 5);

  I.waitForFunction((): void => {
    const curUrl = this._getPageUrl();
    return curUrl;
  }, 5);

  //waitForNavigation - waits for navigation to finish, it takes configured waitForNavigation option (by default);
  //parameter: "options" - any;
  //I.waitForNavigation();

  //waitForURL - waits for page navigates to a new URL or reloads, it takes configured waitForNavigation option (by default);
  //parameter: "url" (string | RegExp) - a glob pattern, regex pattern or predicate receiving URL to match while waiting for the navigation;
  //if the parameter is a string without wildcard characters, the method will wait for navigation to URL that is exactly equal to the string;
  //parameter: "options" - any;
  //navigate to EventStream > Event Specs
  I.waitForURL(
    "https://qa-stage-my.tealiumiq.com/tms?utk=5ade77ef901d51c57b1fd6caf7f1bde1652adae842ae3906ae&account=wikiwahoo&profile=main&product=SS#event-specifications",
    10,
  );

  //waitInUrl - waiting for the part of the URL to match the expected, useful to understand that page was changed;
  //parameter: "urlPart" - string, value to check;
  //parameter: "sec" - number (optional, 1 by default), time in seconds to wait;
  I.waitInUrl("#event-specifications");

  //waitUrlEquals - waits for the entire URL to match the expected;
  //parameter: "urlPart" - string, value to check;
  //parameter: "sec" - number (optional, 1 by default), time in seconds to wait;
  I.waitUrlEquals("https://qa-stage-my.tealiumiq.com/");
});
