angular.module("meanRestaurants").controller("RestaurantsController", RestaurantsController);

function RestaurantsController(RestaurantsDataFactory) {
    const vm = this;

    RestaurantsDataFactory.getAll().then(function(response) {
        vm.restaurants = response;
    });

    vm.addRestaurant = function () {
        const postData = {
            name: vm.newRestaurantName,
            address: vm.newRestaurantAddress,
        };

        if(vm.restaurantForm.$valid) {
            RestaurantsDataFactory.addOne(postData)
            .then(function(response) {
                console.log("Saved", response)
            }).catch(function(error) {
                console.log("Error while saving ", error)
            });
        }
    } 
}