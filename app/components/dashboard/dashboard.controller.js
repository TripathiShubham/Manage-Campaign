angular.module('campaignApp')

//=========================================================================
// Dashboard Controller 
//=========================================================================

.controller('DashboardController', ['$location',
	function($location) {
    var vm = this;
    
    vm.isActive = function(route) {
        return route === $location.path();
    }
}
]);
