
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {
    //Check user if already logged in for performance purpose to not call api again
    //save user data in session storage for security 
    var user = JSON.parse(sessionStorage.user);
    if (user != null) {
        $scope.user = user;
    } 

    $scope.login= () =>
    {
        debugger;
    
        if (user != null) {
            $scope.user = user;
        } else {
            $http.post('/api/login', { email: $scope.email, password: $scope.password }).then(r => {
                sessionStorage.setItem('user', JSON.stringify(r.data));
                $scope.user = r.data;
            }, e => {
                $scope.errorMessage = e.data.message;
            });
        }
    }
}]);
