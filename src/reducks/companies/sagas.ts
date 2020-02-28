import {all, call, fork, put, takeLatest} from "redux-saga/effects"
import {getMemberCompanies} from "../../services/companies/githubApi"
import {ActionTypes} from "./types"
import {companiesActions} from "./actions"

const {getMembersAct} = companiesActions

function* runGetMembers(action: ReturnType<typeof getMembersAct.start>) {
  const {companyName} = action.payload
  const isLoading = false // 要取得

  try {
    const api = getMemberCompanies()
    const users = yield call(api, companyName)
    yield put(getMembersAct.succeed(companyName, users, isLoading))
  } catch (error) {
    yield put(getMembersAct.fail(companyName, error, isLoading))
  }
}

export function* watchGetMembers() {
  yield takeLatest(ActionTypes.getMembersStart, runGetMembers)
}

export default function* rootSaga() {
  yield all([fork(watchGetMembers)])
}
