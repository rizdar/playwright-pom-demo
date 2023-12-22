exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.usernameEl = page.locator('#user-name');
    this.passwordEl = page.locator('#password');
    this.buttonEl = page.locator('#login-button');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.usernameEl.fill(username);
    await this.passwordEl.fill(password);
    await this.buttonEl.click();
  }
};
