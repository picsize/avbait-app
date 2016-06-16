avBait.factory('Popup', function ($uibModal) {

    functions = {
        open: function (path, ctrl, data) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/app/views/popups/' + path +'.html',
                controller: ctrl,
                //size: size,
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            });
        }
    }

    return functions;
});