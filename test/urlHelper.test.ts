import { parseUrl } from '../src/utils/urlHelper';
import { describe, expect, test } from '@jest/globals';

describe('urlHelper module', () => {
  test('urlHelper test 1', () => {
    const url = parseUrl('http://localhost:3000', 'api/test', {
      id: 1,
      name: 'test',
    });
    expect(url).toBe('http://localhost:3000/api/test?id=1&name=test');
  });

  test('urlHelper test 2', () => {
    const url = parseUrl('http://localhost:3000', 'api/test?id=1', {
      name: 'test',
    });
    expect(url).toBe('http://localhost:3000/api/test?id=1&name=test');
  });

  test('urlHelper test 3', () => {
    const url = parseUrl('http://localhost:3000', 'api/test');
    expect(url).toBe('http://localhost:3000/api/test');
  });

  test('urlHelper test 4', () => {
    const url = parseUrl('http://localhost:3000', '/api/test');
    expect(url).toBe('http://localhost:3000/api/test');
  });
});
