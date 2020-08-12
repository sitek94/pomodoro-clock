import { mmss } from './util';

test('should parse value to mm:ss format', () => {
  expect(mmss(0)).toBe('00:00');
  expect(mmss(59)).toBe('00:59');
  expect(mmss(1500)).toBe('25:00');
  expect(mmss(3599)).toBe('59:59');
  expect(mmss(3600)).toBe('60:00');
})
