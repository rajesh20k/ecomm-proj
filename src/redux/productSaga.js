import { takeEvery,put } from "redux-saga/effects";
import { ADD_TO_CART, PRODUCT_LIST, REMOVE_FROM_CART, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  console.warn(" getProducts API is called");
  let data = yield fetch("http://localhost:3010/products");
  data = yield data.json();
  console.warn("action is called", data);
  yield put({type:SET_PRODUCT_LIST,data})
}

function* searchProducts(data) {
  console.warn(" searchProducts API is called");
  let result = yield fetch(`http://localhost:3010/products?q=${data.query}`);
  result = yield result.json();
  console.warn("searchProducts action is called", result);
  yield put({type:SET_PRODUCT_LIST,data:result})
}

function* testAddCart() {
  console.warn("testAddCart API is called");
}

function* removeFromCart(data) {
    console.warn("removeFromCart API is called from saga",data);
  }

function* productSaga() {
  // Generator function
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(ADD_TO_CART, testAddCart);
  yield takeEvery(REMOVE_FROM_CART, removeFromCart);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
