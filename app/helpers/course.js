import R from 'ramda';

const getHoles = R.prop('holes');
const getPar = R.prop('par');
const calculatePar = R.pipe(getHoles, R.map(getPar), R.sum);

/* eslint import/prefer-default-export: 0 */
export { calculatePar };
