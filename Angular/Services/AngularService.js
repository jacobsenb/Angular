app.factory('AngularService', function ($resource)
{
    var requestUri = 'http://win-qci5apqetrc/AngularService/';

    return $resource(requestUri, {},
        {
            "register": { method: 'POST', url: "http://win-qci5apqetrc/AngularService/api/Account/Register" },
            "users": { method: "GET", url: "http://win-qci5apqetrc/AngularService/api/Account/UserInfo" },

    });

});