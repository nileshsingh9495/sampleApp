const prefix = 'RESTAURANT/';
export const GET_RESTAURANT_LIST = `${prefix}GET_RESTAURANT_LIST`;
export const SET_RESTAURANT_LIST = `${prefix}SET_RESTAURANT_LIST`;
export const SET_LOADING = `${prefix}SET_LOADING`;
// export const GET_RESTAURANT_LIST_LOCAL_STORAGE = `${prefix}GET_RESTAURANT_LIST_LOCAL_STORAGE`;
// export const SET_NET_INFO = `${prefix}SET_NET_INFO`;

export const getRestaurantList = () => ({type: GET_RESTAURANT_LIST});
// export const getRESTAURANTListFromLocalStorage = () => ({
//   type: GET_RESTAURANT_LIST_LOCAL_STORAGE,
// });

export const setLoading = data => ({type: SET_LOADING, data});
// export const setNetInfo = (data) => ({type: SET_NET_INFO, data});
