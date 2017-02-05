angular.module('cgPrompt', ['ui.bootstrap']);

angular.module('cgPrompt')
  .factory('prompt', ['$uibModal', '$q', function($uibModal, $q) {

    var prompt = function(options) {

        var defaults = {
            title: '',
            message: '',
            input: false,
            label: '',
            value: '',
            values: false,
            buttons: [
                { label:'OK',primary:true },
                { label:'Cancel',cancel:true }
            ]
        };

        if (options === undefined) {
            options = {};
        }

        for (var key in defaults) {
            if (options[key] === undefined) {
                options[key] = defaults[key];
            }
        }

        var defer = $q.defer();

        $uibModal.open( {
            templateUrl:'scripts/angular-prompt.html',
            controller: 'cgPromptCtrl',
            resolve: {
                options:function() {
                    return options;
                }
            }
        }).result.then(function(result) {
            if (options.input) {
                defer.resolve(result.input);
            } else {
                defer.resolve(result.button);
            }
        }, function() {
            defer.reject();
        });

        return defer.promise;
    };

    return prompt;
	}
]);

angular.module('cgPrompt').controller('cgPromptCtrl', ['$scope', 'options', '$timeout', function($scope, options, $timeout) {

    $scope.input = { name:options.value };

    $scope.options = options;

    $scope.form = {};

    $scope.buttonClicked = function(button) {
        if (button.cancel){
            $scope.$dismiss();
            return;
        }
        if (options.input && $scope.form.cgPromptForm.$invalid) {
            $scope.changed = true;
            return;
        }
        $scope.$close({ button:button,input:$scope.input.name });
    };

    $scope.submit = function() {
        var ok;
        angular.forEach($scope.options.buttons, function(button){
            if (button.primary) {
                ok = button;
            }
        });
        if (ok) {
            $scope.buttonClicked(ok);
        }
    };

    $timeout(function() {
        var elem = document.querySelector('#cgPromptInput');
        if (elem) {
            if (elem.select) {
                elem.select();
            }
            if (elem.focus) {
                elem.focus();
            }
        }
    },100);

}]);
