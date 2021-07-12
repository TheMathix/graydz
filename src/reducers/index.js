import { combineReducers } from "redux";

import posts from './posts';
import info from './info';
import auth from './auth';

export const reducers = combineReducers({info, auth, posts});