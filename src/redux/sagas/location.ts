import { put, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../services';
import type { Location } from '../../types/loaction';
import { actions } from '../reducers/location';

function* getLocations() {
  const result: WithApiResult<Location[] | null> =
    yield backendService.post<Location>('api/getLocations');
  if (result.kind === 'ok' && result.data) {
    yield put(actions.fetchLocations(result.data));
  }
}

export default function* locationSaga() {
  yield takeLatest(actions.getLocations.type, getLocations);
}
