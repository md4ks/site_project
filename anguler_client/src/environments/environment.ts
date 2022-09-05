// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
 
export const environment = {
  uiRole:"logs", //domain,logs
  applicationName: "ReeportJio",
  applicationDomainName: "Project",

  appTitle:"ReeportJio",
  hmr: false,
  // apiUrl: 'https://pilot-gateway-1.beckn.nsdl.co.in/logs-monitoring-api',
  apiUrl: 'http://localhost:9003/site-api', 
  production:true,
  env: 'dev', 
  webApiRedirectURL:'http://127.0.0.1:4200/',
  urlOauth2:'http://app.fossgentechnologies.com/auth/realms/site', 
   logoURL:'assets/images/logo/ondc.png', 
/* urlOauth2:'https://app.qnopy.com/reactoauth2', */
  oauth2clientToken:'k9Y0zRvy5ivCsYjc9c1mXLGMferM0ySg',
  scope: 'openid profile',
  clientId: 'site-web',


  debug:true,
   

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
