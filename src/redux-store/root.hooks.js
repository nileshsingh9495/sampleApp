import {useSelector, useDispatch} from 'react-redux';

export const useHBStore = () => {
  return {
    state: useSelector((state) => state),
    dispatch: useDispatch(),
  };
};
