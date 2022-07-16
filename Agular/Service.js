app.service("angularService", function ($http) {
    
    
    this.doLogin = function (LoginData) {
        var response = $http({
            method: "post",
            url: "http://159.65.152.119/api/v1/admin/create/vendor",
            data: JSON.stringify(LoginData),
            dataType: "json"
        });
        return response;
    }

});