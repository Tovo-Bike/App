// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const url = 'http://172.20.10.3:8000/';

export const environment = {
  production: false,
  loginUrl: `${url}user/login`,
  signupUrl: `${url}user/create`,
  titlesUrl: `${url}titles`,
  tripGoUrl: `${url}trip/go`,
  tripUrl: `${url}trip/`,
  tripAcceptUrl: `${url}trip/accept`,
  tripStartUrl: `${url}trip/start`,
  tripEndUrl: `${url}trip/end`,
  rankTakerUrl: `${url}rank/taker`,
  rankRiderUrl: `${url}rank/rider`,
  buyTitleUrl: `${url}buy`,
  profileUrl: `${url}user/profile`,
  hisUrl: `${url}user/his`,
  equipUrl: `${url}equip`,
  updateUrl: `${url}user/update`,
  rateUrl: `${url}trip/rate`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
