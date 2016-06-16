describe("Mac Modal e2e test", function() {
  beforeEach(function() {
    browser.get("/test/e2e/modal.html");
  });

  it("should show the registered modal", function() {
    var button, modal;

    button = element(By.id("open-btn"));
    button.click();
    modal = element(By.id("test-modal"));

    expect(modal.isDisplayed()).toBeTruthy();
  });

  it("should hide the modal", function() {
    var button, closeBtn, modal;
    button = element(By.id("open-btn"));
    button.click();
    browser.sleep(500);
    modal = element(By.id("test-modal"));

    closeBtn = element(By.css("#test-modal .mac-close-modal"));
    closeBtn.click();

    expect(modal.isDisplayed()).toBeFalsy();
  });

  it("should hide the modal with 'escape' key", function() {
    var button, modal;
    button = element(By.id("open-keyboard-btn"));
    button.click();
    modal = element(By.id("keyboard-modal"));
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

    expect(modal.isDisplayed()).toBeFalsy();
  });

  it("should close the modal after clicking on overlay", function() {
    var button, modal;
    button = element(By.id("open-overlay-btn"));
    button.click();
    modal = browser.findElement(By.id("overlay-modal"));

    browser.driver.executeScript("arguments[0].click()", modal).then(function() {
      expect(modal.isDisplayed()).toBeFalsy();
    });
  });
});
