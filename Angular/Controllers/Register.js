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
                    console.log(successResult);
            }, function (errorResult) {
                // do something on error
                console.log(errorResult);
            });
            
        }
        catch(err)
        { }


        var test = AngularService.users();

    };

});