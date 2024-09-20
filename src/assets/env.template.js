(function(window){
  window["env"] = window["env"] || {};
  window["env"]["clientId"] = "${CLIENT_ID}";
  window["env"]["hhsWarning"] = "${HHS_WARNING}"|| "false";
  window["env"]["authdebug"] = "${AUTH_DEBUG}" || "false";
  window['env']['logEndpointUri'] = "${LOG_END_POINT_URI}";
  window['env']['logApiKey'] = "${LOG_API_KEY}";
  window['env']['APP_SHARED_DATA_ENDPOINT'] = "${APP_SHARED_DATA_ENDPOINT}";
  window['env']['APP_SHARED_DATA_AUTH_ENDPOINT'] = "${APP_SHARED_DATA_AUTH_ENDPOINT}";
  window['env']['APP_SHARED_DATA_SCOPE'] = "launch/patient openid fhirUser patient/* user/*.cruds patient/*.cruds"
})(this);
