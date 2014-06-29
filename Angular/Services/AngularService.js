app.factory('AngularService', function ($resource)
{
    var requestUri = 'http://win-qci5apqetrc/AngularService/';

    return $resource(requestUri, {},
        {
            "register": { method: 'POST', url: "http://win-qci5apqetrc/AngularService/api/Account/Register" },
            "userInfo": {method: "GET", url: "http://win-qci5apqetrc/AngularService/api/Account/UserInfo"},
            "signIn": { method: "POST",params:{isPersistent:'false'},  url: "http://win-qci5apqetrc/AngularService/api/Account/SignIn" }
    });

});