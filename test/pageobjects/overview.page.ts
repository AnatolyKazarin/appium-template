import {SHOW_TIMEOUT} from '../constants';

class OverviewPage {
  public get startRunButton() {
    return $('~StartRunButton');
  }

  public async startRun() {
    await this.startRunButton.waitForExist(SHOW_TIMEOUT);
    await this.startRunButton.click();
  }
}

export default new OverviewPage();
