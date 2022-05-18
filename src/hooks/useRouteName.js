import routesDash from "routesDash";
import routesAnalytics from "routesAnalytics";

export const useRouteName = () => {
  let name = "";
  routesDash.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = routesDash.rtlActive ? route.rtlName : route.name;
    }
  });
  return name;
};
export const useRouteAnalyticsName = () => {
  let name = "";
  routesAnalytics.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = routesAnalytics.rtlActive ? route.rtlName : route.name;
    }
  });
  return name;
};
