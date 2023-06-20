import type { Location } from '../../types/loaction';
import type { WeatherResult } from '../../types/weather';

export type LocationState = {
  data: Location[];
  loading: boolean;
  weather?: CustomObject<WeatherResult>;
};
