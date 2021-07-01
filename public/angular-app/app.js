angular.module("meanRestaurants", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"angular-app/restaurant-list/restaurant-list.html",
        controller:"RestaurantsController",
        controllerAs:"vm"
    }).when("/restaurants/:id", {
        templateUrl:"angular-app/restaurant-display/restaurant.html",
        controller:"RestaurantController",
        controllerAs:"vm"
    })
}