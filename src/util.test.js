import { mmss, inRange } from './util';

it('format value to mm:ss', () => {
  expect(mmss(0)).toBe('00:00');
  expect(mmss(59)).toBe('00:59');
  expect(mmss(1500)).toBe('25:00');
  expect(mmss(3599)).toBe('59:59');
  expect(mmss(3600)).toBe('60:00');
})

it('checks if value is in range min-max', () => {
  expect(inRange(-1, 0, 60)).toBeFalsy();
  expect(inRange(0, 0, 60)).toBeTruthy();
  expect(inRange(30, 0, 60)).toBeTruthy();
  expect(inRange(60, 0, 60)).toBeTruthy();
  expect(inRange(61, 0, 60)).toBeFalsy();
});
