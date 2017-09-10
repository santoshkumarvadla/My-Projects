challengeApp.factory('challengeService', ['$http', function($http) {

  return {
	  givenURL1: function() {
      return $http({
        method: 'GET',
        url: challengeApp.givenURL1,
      });
    },
    givenURL2: function() {
        return $http({
          method: 'GET',
          url: challengeApp.givenURL2,
        });
    }

  }
}]);
