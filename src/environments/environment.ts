export const environment = {
  production: false,
  mccapiUrl:  window['env']['apiServer'] || 'http://localhost:8081',
  logEndpointUri:  window['env']['logEndpointUri'] || 'http://localhost:8085',
  logApiKey:  window['env']['logApiKey'] || 'dd9761de-dc5e-4132-a159-51421fc43e07'
};
