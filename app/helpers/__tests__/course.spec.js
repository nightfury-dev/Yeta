import { calculatePar } from '../course';


/* global expect, test */

test('calculates par for course with single hole', () => {
  const course = {
    holes: [{ par: 3 }]
  };
  expect(calculatePar(course)).toBe(3);
});

test('calculates par for course with multiple holes', () => {
  const course = {
    holes: [{ par: 3 }, { par: 3 }]
  };
  expect(calculatePar(course)).toBe(6);
});
