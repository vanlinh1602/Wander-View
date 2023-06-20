import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { put, select, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../services';
import type { Location } from '../../types/loaction';
import type { WeatherResult } from '../../types/weather';
import { removeAccents } from '../../utils/string';
import { actions } from '../reducers/location';
import { selectLocations } from '../selectors/loaction';

function* getLocations() {
  const result: WithApiResult<Location[] | null> =
    yield backendService.post<Location>('api/getLocations');
  if (result.kind === 'ok' && result.data) {
    yield put(actions.fetchLocations(result.data));
  }
}

function* addLocation(action: PayloadAction<Location>) {
  const data = action.payload;
  const locations: Location[] = yield select(selectLocations);

  const dataAdd = _.cloneDeep(data);

  const result: WithApiResult<string> = yield backendService.post(
    'api/addLocation',
    {
      data: dataAdd,
    },
  );

  if (result.kind === 'ok') {
    const newLocations = _.cloneDeep(locations);
    dataAdd.id = result.data;
    newLocations.push(dataAdd);
    yield put(actions.fetchLocations(newLocations));
  } else {
    yield put(actions.fetchLocations());
  }
}

function* getWeatherResult(
  action: PayloadAction<{ id: string; location: string }>,
) {
  const { id, location } = action.payload;
  const result: WithApiResult<WeatherResult> = yield backendService.post(
    'api/getWeather',
    {
      location: removeAccents(location),
    },
  );
  if (result.kind === 'ok') {
    yield put(actions.fetchWeatherResult({ id, result: result.data }));
  }
}

export default function* locationSaga() {
  yield takeLatest(actions.getLocations.type, getLocations);
  yield takeLatest(actions.addLocation.type, addLocation);
  yield takeLatest(actions.getWeatherResult.type, getWeatherResult);
}
