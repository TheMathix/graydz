import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (info = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...info, action.payload];
    case UPDATE:
      return info.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return info.filter((post) => post._id !== action.payload);
    default:
      return info;
  }
};