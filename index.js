const {Builder, By} = require('selenium-webdriver');
const URL = 'http://suninjuly.github.io/find_link_text';
let text = (String) (Math.ceil(Math.pow(Math.PI, Math.E) * 10000));

(async function myFunc() {
    let driver = await new Builder().forBrowser('chrome').build();
  try{
    await driver.get(URL);
    await driver.findElement(By.linkText(text)).click();
    await driver.findElement(By.name("first_name")).sendKeys('Ivan');
    await driver.findElement(By.name("last_name")).sendKeys('Petrov');
    await driver.findElement(By.css(".form-control.city")).sendKeys('Smolensk');
    await driver.findElement(By.id("country")).sendKeys('Russia');
    await driver.findElement(By.xpath('//form//button')).click();
  }
  finally {
     setTimeout(driver.quit(), 10000);
  }
})();

