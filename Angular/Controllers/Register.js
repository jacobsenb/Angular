app.controller('RegisterController', function ($resource, AngularService) {

    this.email;
    this.pswd;
    this.confirmpswd;

    this.registerUser = function () {
        

        try {
            
            var user = { Email: this.email, Password: this.pswd, ConfirmPassword: this.confirmpswd};
            
            var data = AngularService.register(user,
                function (successResult) {
                // do something on success
            }, function (errorResult) {
                // do something on error
                if (errorResult.status === 404) {
                }
            });
            
        }
        catch(err)
        { }


        var test = AngularService.users();

    };

});