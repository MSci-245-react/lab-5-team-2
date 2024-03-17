import RestaurantList from './RestaurantList';

function loadRestaurants() {
}

export default function RestaurantScreen() {
    return (
        <div> 
            <h1>Restaurants</h1> 
            <RestaurantList loadRestaurants={loadRestaurants} />
        </div>
    );
}
