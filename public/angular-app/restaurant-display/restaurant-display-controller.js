angular.module("meanRestaurants").controller("RestaurantController", RestaurantController);


function RestaurantController(RestaurantsDataFactory, $routeParams) {

    const vm = this;
    const restaurantId = $routeParams.id;

    RestaurantsDataFactory.getOne(restaurantId).then(function (response) {
        vm.restaurant = response;
    })

    vm.deleteRestaurant = function () {
        RestaurantsDataFactory.deleteOne(restaurantId)
            .then(function (response) {
                console.log("Restaurant Deleted", response);
            }).catch(function (error) {
                console.log("Error Restaurant", error);
            })
    }

}