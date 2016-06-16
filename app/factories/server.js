avBait.factory('Server', function ($http) {
    baseUrl = '/server/api.asmx/';
    
    functions = {
        post: function (handler, data) {
            return $http({
                url: baseUrl + handler,
                method: 'POST',
                data: (data != undefined) ? JSON.stringify(data) : '',
                contentType: 'application/json',
                //withCredentials: true,
                //headers: {
                //    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                //    'Authorization': function () { return null; }
                //}
            });
        },

        readJson: function (fileName) {
            //return $http.get('/meta-data/' + fileName + '.json');
        },

        handleErrors: function (json) {
            
        }
    }

    return functions;
});