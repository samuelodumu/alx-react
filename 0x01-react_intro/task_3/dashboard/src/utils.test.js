// Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
// Write a test to check that getFooterCopy returns the correct string when the argument is true or false
// Write a test checking the returned string for getLatestNotification

import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test('getFullYear returns the correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns correct string', () => {
  expect(getFooterCopy(true)).toBe('ALX');
  expect(getFooterCopy(false)).toBe('ALX main dashboard');
});

test('getLatestNotification returns correct string', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
