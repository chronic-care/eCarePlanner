(function(window){
    window["env"] = window["env"] || {};
    window["env"]["clientId"] = "${CLIENT_ID}";
    window["env"]["apiServer"] = "${API_SERVER}" || "http://localhost:8080";
   window["env"]["authdebug"] = "${AUTH_DEBUG}" || "false";
})(this);
