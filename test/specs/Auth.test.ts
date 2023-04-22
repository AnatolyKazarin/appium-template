import LoginPage from '../pageobjects/login.page';
import RoutesPage from '../pageobjects/routes.page';
import OverviewPage from '../pageobjects/overview.page';
import GuidancePage from '../pageobjects/guidance.page';
import {SHOW_TIMEOUT} from '../constants';
import TakeAttendancePage from '../pageobjects/takeAttendance.page';

describe('Login Page', () => {
  it('- should login with correct credentials', async () => {
    await LoginPage.login();

    expect(await RoutesPage.routesScreen.waitForExist(SHOW_TIMEOUT)).toBe(true);
  }, 200000);

  it('- should start and stop run', async () => {
    await RoutesPage.selectRoute();

    await OverviewPage.startRun();

    await GuidancePage.stopStartRun();

    await GuidancePage.stopStartRun();

    await GuidancePage.stopStartRun();

    await GuidancePage.goToRunsScreen();

    expect(await RoutesPage.routesScreen.waitForExist(SHOW_TIMEOUT)).toBe(true);
  }, 400000);

  it('- should open attendance screen when distance less than 150 metres', async () => {
    await driver.setGeoLocation({
      latitude: 33.439788,
      longitude: -111.926341,
      altitude: 10,
    });

    await RoutesPage.selectRoute();

    await OverviewPage.startRun();

    await driver.pause(110000);

    await TakeAttendancePage.doneAttendanceButton.click();

    await GuidancePage.stopStartRun();

    await GuidancePage.goToRunsScreen();

    expect(await RoutesPage.routesScreen.waitForExist(SHOW_TIMEOUT)).toBe(true);

    await driver.closeApp();
  }, 400000);
});
