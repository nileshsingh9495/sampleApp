import request from '../../utils/request';

export const getRestaurantListApi = () => request.get('/api/restaurants_list');
