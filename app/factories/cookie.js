
avBait.factory('Cookie', function ($cookies) {

    functions = {
        saveObject: function (key, value) {
            var date = new Date();
            date.setDate(date.getDate() + 3);
            $cookies.putObject(key, value, { 'expires': date, 'path': '/' });
        },

        getObject: function (key) {
            return $cookies.getObject(key);
        },

        save: function (key, value) {
            var date = new Date();
            date.setDate(date.getDate() + 3);
            $cookies.put(key, value, { 'expires': date, 'path': '/' });
        },

        getAll: function () {
            return $cookies.getAll();
        },

        get: function (key) {
            return $cookies.get(key);
        },

        remove: function (key) {
            $cookies.remove(key);
        }
    }

    return functions;
});