// src/redux/store.js

import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { userReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";
import { subcategoryReducer } from "./subcategoryReducer";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";
import cardReducer from "./cartReducer";
import { messageReducer } from "./messageReducer";

// دمج المقتطعات
const rootReducer = combineReducers({
    auth: userReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    product: productReducer,
    order: orderReducer,
    cart: cardReducer,
    message: messageReducer,
});

// إنشاء المتجر
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
