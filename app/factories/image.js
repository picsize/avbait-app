
avBait.factory('Image', function () {
  
    functions = {
        show: function (input, elem, callback) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    angular.element(elem).attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }

            if (angular.isFunction(callback)) {
                callback();
            }
        },

        printScreen: function (elem) {
            html2canvas(document.body, {
                onrendered: function (canvas) {
                    angular.element(elem).attr('src', canvas.toDataURL()).hide();
                }
            });
        }
    }

    return functions;
});