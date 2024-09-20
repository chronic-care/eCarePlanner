export const environment = {
  production: false,
  hhsWarning: window['env']['hhsWarning'],
  logEndpointUri:  window['env']['logEndpointUri'],
  logApiKey:  window['env']['logApiKey'],
  clientId: window['env']['clientId'],
  sdsURL: window['env']['APP_SHARED_DATA_ENDPOINT'] ,
  authURL: window['env']['APP_SHARED_DATA_AUTH_ENDPOINT'] ,
  // sdsScope: window['env']['APP_SHARED_DATA_SCOPE']
  // sdsURL: window['env']['APP_SHARED_DATA_ENDPOINT'] ? window['env']['APP_SHARED_DATA_ENDPOINT'] : "http://localhost:8080/fhir",
  // authURL: window['env']['APP_SHARED_DATA_AUTH_ENDPOINT'] ? window['env']['APP_SHARED_DATA_AUTH_ENDPOINT']: "https://gw.interop.community/MCCDevelopment/data",
  sdsScope: window['env']['APP_SHARED_DATA_SCOPE'] ? window['env']['APP_SHARED_DATA_SCOPE'] : "launch/patient openid fhirUser patient/* user/*.cruds patient/*.cruds"
};

