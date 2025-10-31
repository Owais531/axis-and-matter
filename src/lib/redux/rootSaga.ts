import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "@/lib/redux/sagas/features/app";

export function* helloSaga() {
  console.log("Hello Sagas!"); // This is for testing purposes, will remove in the future
}

export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
