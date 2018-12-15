/* tslint:disable */
interface IDictionary<TValue> {
  [id: string]: TValue;
}

export const DIRECTIONS: IDictionary<string> = {
  NORTH: 'N',
  NORTH_NORTH_EAST: 'NNE',
  NORTH_EAST: 'NE',
  EAST_NORTH_EAST: 'ENE',
  EAST: 'E',
  EAST_SOUTH_EAST: 'ESE',
  SOUTH_EAST: 'SE',
  SOUTH_SOUTH_EAST: 'SSE',
  SOUTH: 'S',
  SOUTH_SOUTH_WEST: 'SSW',
  SOUTH_WEST: 'SW',
  WEST_SOUTH_WEST: 'WSW',
  WEST: 'W',
  WEST_NORTH_WEST: 'WNW',
  NORTH_WEST: 'NW',
  NORTH_NORTH_WEST: 'NNW',
};
