class LoginPage {
  public get usernameInput() {
    return $('~UsernameInput');
  }

  public get passwordInput() {
    return $('~PasswordInput');
  }

  public get imeiInput() {
    return $('~IMEIInput');
  }

  public get loginButton() {
    return $('~LoginButton');
  }

  public async login(username = 'admin', password = '1234', imei = '1234') {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.imeiInput.setValue(imei);
    await this.loginButton.click();
  }
}

export default new LoginPage();
