import { DIRECTIONS } from './constants';

/**
 * @Method: Returns direction converted from degrees
 * @Param {number} degrees Degrees
 * @Return {string} direction Direction
 */
export const directional = (degrees: number): string => {
  if (degrees < 0 || degrees > 360) {
    throw new Error('Degrees must be between 0 and 360');
  }

  const winds: string[] = Object.keys(DIRECTIONS).map(key => DIRECTIONS[key]);
  const offset: number = Math.floor(degrees / 22.5 + 0.5);
  const index: number = offset % winds.length;
  const direction: string = winds[index];
  return direction;
};
