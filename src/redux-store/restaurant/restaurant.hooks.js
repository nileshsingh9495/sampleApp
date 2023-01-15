import {useHBStore} from '../root.hooks';
import {selectRestaurantData} from './restaurant.selectors';
import {getRestaurantList} from './restaurant.action';

export const useRestaurantData = () => {
  const {state, dispatch} = useHBStore();
  const restaurant = selectRestaurantData(state);
  const {restaurantList, loading} = restaurant;
  return {
    restaurantList,
    loading,
    getRestaurantList: payload => dispatch(getRestaurantList(payload)),
  };
};
