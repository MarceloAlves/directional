import {directional} from '../src'

describe('directional', () => {
  it('returns an error when over 360', () => {
    expect(() => directional(370)).toThrow('Degrees must be between 0 and 360');
  });

  it('returns an error when under 0', () => {
    expect(() => directional(-1)).toThrow('Degrees must be between 0 and 360');
  });

  it('returns NORTH_NORTH_EAST', () => {
    expect(directional(12)).toBe('NNE');
    expect(directional(22)).toBe('NNE');
    expect(directional(33)).toBe('NNE');
  });

  it('returns NORTH_EAST', () => {
    expect(directional(34)).toBe('NE');
    expect(directional(45)).toBe('NE');
    expect(directional(56)).toBe('NE');
  });
  
  it('returns EAST_NORTH_EAST', () => {
    expect(directional(57)).toBe('ENE');
    expect(directional(67)).toBe('ENE');
    expect(directional(78)).toBe('ENE');
  });
  
  it('returns EAST', () => {
    expect(directional(79)).toBe('E');
    expect(directional(90)).toBe('E');
    expect(directional(101)).toBe('E');
  });
  
  it('returns EAST_SOUTH_EAST', () => {
    expect(directional(102)).toBe('ESE');
    expect(directional(113)).toBe('ESE');
    expect(directional(123)).toBe('ESE');
  });
  
  it('returns SOUTH_EAST', () => {
    expect(directional(124)).toBe('SE');
    expect(directional(135)).toBe('SE');
    expect(directional(146)).toBe('SE');
  });
  
  it('returns SOUTH_SOUTH_EAST', () => {
    expect(directional(147)).toBe('SSE');
    expect(directional(158)).toBe('SSE');
    expect(directional(168)).toBe('SSE');
  });
  
  it('returns SOUTH', () => {
    expect(directional(169)).toBe('S');
    expect(directional(180)).toBe('S');
    expect(directional(191)).toBe('S');
  });
  
  it('returns SOUTH_SOUTH_WEST', () => {
    expect(directional(192)).toBe('SSW');
    expect(directional(203)).toBe('SSW');
    expect(directional(213)).toBe('SSW');
  });
  
  it('returns SOUTH_WEST', () => {
    expect(directional(214)).toBe('SW');
    expect(directional(225)).toBe('SW');
    expect(directional(236)).toBe('SW');
  });
  
  it('returns WEST_SOUTH_WEST', () => {
    expect(directional(237)).toBe('WSW');
    expect(directional(248)).toBe('WSW');
    expect(directional(258)).toBe('WSW');
  });
  
  it('returns WEST', () => {
    expect(directional(259)).toBe('W');
    expect(directional(270)).toBe('W');
    expect(directional(281)).toBe('W');
  });
  
  it('returns WEST_NORTH_WEST', () => {
    expect(directional(282)).toBe('WNW');
    expect(directional(293)).toBe('WNW');
    expect(directional(303)).toBe('WNW');
  });
  
  it('returns NORTH_WEST', () => {
    expect(directional(304)).toBe('NW');
    expect(directional(315)).toBe('NW');
    expect(directional(326)).toBe('NW');
  });
  
  it('returns NORTH_NORTH_WEST', () => {
    expect(directional(327)).toBe('NNW');
    expect(directional(338)).toBe('NNW');
    expect(directional(348)).toBe('NNW');
  });
  
  it('returns NORTH', () => {
    expect(directional(349)).toBe('N');
    expect(directional(0)).toBe('N');
    expect(directional(11)).toBe('N');
  });
});
