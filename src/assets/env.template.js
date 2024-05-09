(function(window){
  window["env"] = window["env"] || {};
  window["env"]["clientId"] = "${CLIENT_ID}";
  window["env"]["hhsWarning"] = "${HHS_WARNING}"|| "false";
  window["env"]["authdebug"] = "${AUTH_DEBUG}" || "false";
  window['env']['logEndpointUri'] = "${LOG_END_POINT_URI}";
  window['env']['logApiKey'] = "${LOG_API_KEY}";
})(this);
