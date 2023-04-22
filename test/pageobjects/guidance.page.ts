class GuidancePage {
  public get stopRunButton() {
    return $('~StopRunButton');
  }

  public get runsTabBarButton() {
    return $('~RunsTabBarButton');
  }

  public async stopStartRun() {
    await this.stopRunButton.waitForExist({timeout: 20000, interval: 10000});
    await this.stopRunButton.click();
  }

  public async goToRunsScreen() {
    await this.runsTabBarButton.waitForExist({timeout: 20000, interval: 10000});
    await this.runsTabBarButton.click();
  }
}

export default new GuidancePage();
