class RoutesPage {
  public get routesScreen() {
    return $('~RoutesScreen');
  }

  public async selectRoute(routeId = 27209) {
    await $(`~RouteItem_${routeId}`).click();
  }
}

export default new RoutesPage();
