avBait.factory('View', function ($state, $stateParams) {
  
    functions = {
        show: function (url, params) {
            $state.go(url, params);
        },

        getParams:function(){
            return $stateParams;
        }
    }

    return functions;
});