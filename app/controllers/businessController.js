
avBait.controller('businessController', function ($rootScope, $scope, Server, Cookie) {

    $scope.models = {
        business: {
            email: '',
            password: '',
            userType: 4,
            fullName: '',
            mobileNumber: '',
            homeNumber: '',
            familyStatus: '', // S,M,D,W
            gender: '', // M,F
            address: '',
            birthday: new Date(),
            image: '',
            businessName: '',
            sundayStart: '',
            sundayEnd: '',
            mondayStart: '',
            mondayEnd: '',
            tuesdayStart: '',
            tuesdayEnd: '',
            wednesdayStart: '',
            wednesdayEnd: '',
            thursdayStart: '',
            thursdayEnd: '',
            fridayStart: '',
            fridayEnd: '',
            saturdayStart: '',
            saturdayEnd: ''
        }
    }

    $scope.addBusiness = function () {
        Server.post('addBusiness', $scope.businessToServer())
        .success(function (res) {
            console.log('s',res);
        })
        .error(function (res) {
            console.log('e', res);
        })
    }

    $scope.businessToServer = function () {
        var data = $scope.models.business;
        data.birthday = moment(data.birthday).format('DD/MM/YYYY');
        data.sundayStart = moment(data.sundayStart).format('HH:mm');
        data.sundayEnd = moment(data.sundayEnd).format('HH:mm');
        data.mondayStart = moment(data.mondayStart).format('HH:mm');
        data.mondayEnd = moment(data.mondayEnd).format('HH:mm');
        data.tuesdayStart = moment(data.tuesdayStart).format('HH:mm');
        data.tuesdayEnd = moment(data.tuesdayEnd).format('HH:mm');
        data.wednesdayStart = moment(data.wednesdayStart).format('HH:mm');
        data.wednesdayEnd = moment(data.wednesdayEnd).format('HH:mm');
        data.thursdayStart = moment(data.thursdayStart).format('HH:mm');
        data.thursdayEnd = moment(data.thursdayEnd).format('HH:mm');
        data.fridayStart = moment(data.fridayStart).format('HH:mm');
        data.fridayEnd = moment(data.fridayEnd).format('HH:mm');
        data.saturdayStart = moment(data.saturdayStart).format('HH:mm');
        data.saturdayEnd = moment(data.saturdayEnd).format('HH:mm');
        debugger    
        return data;
    }

});

