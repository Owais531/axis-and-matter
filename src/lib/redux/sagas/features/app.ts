import { put, takeEvery, call } from "redux-saga/effects";
import { increment } from "@/lib/redux/slices/features/app";
import { delay } from "@/utils/delay";
import { requestTypes } from "../../types";

export function* incrementAsync() {
  try {
    yield call(delay, 1000);
    yield put(increment());
  } catch {
    console.log("error happend incrementAsync");
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(requestTypes.incrementAsyncRequest, incrementAsync);
}