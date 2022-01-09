import R from 'ramda';


const groupByPlayer = R.groupBy((score) => score.player.id);
const sum = R.reduce((acc, score) => score.score + acc, 0);

const calculateScores = (scores, par) => {
  const calculateScore = (score) => score - par;
  const formatScore = (score) => (score > 0 ? `+${score}` : score);
  const getScore = R.pipe(sum, calculateScore, formatScore);

  const totalForPlayer = R.over(R.lensIndex(1), getScore);

  return R.pipe(
    groupByPlayer,
    R.toPairs,
    R.map(totalForPlayer),
    R.fromPairs
  )(scores);
};

/* eslint import/prefer-default-export: 0 */
export { calculateScores };
