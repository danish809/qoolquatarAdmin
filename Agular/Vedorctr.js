
    ﻿app.controller("Vendor", function ($scope, angularService) {

    $scope.SaveVedor = function () {
        var data = {
            Name: $scope.Name,
            MobileNo: $scope.mobileNo,
            EmailId: $scope.Email,
            Address: $scope.Address,
            DOB: $scope.dob,
            District: $scope.district,
            State: $scope.stateTemp,
            Position: $scope.position,
            SponsorId: $scope.SponsorId,
            FathersName: $scope.FathersName,
        }
        angularService.saveVedor(data).
            then(function (response) {
                if (response.data.Message != "Success") {
                    toastr.error('Error', response.data.Message);
                } else if (response.data.Message == "Success") {
                    toastr.success('Success', 'Vedor Register');

                    $scope.clearfield();
                }
            }, function () {
                toastr.error('Failed', 'Vedor Register'); member / directsponsor
            });
    }

});