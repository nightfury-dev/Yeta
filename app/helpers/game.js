import R from 'ramda';


/**
 * Returns the ordering for the next hole using order and scores of
 * current hole.
 */
const getOrder = (order, scores) => {
  const groupByScores = R.groupBy((score) => score.score);
  const grouped = groupByScores(scores);
  if (Object.keys(grouped).length === 1) {
    return order;
  }

  const orderedGroup = R.pipe(
    R.map((score) => ({
      playerId: score.player.id,
      order: order[score.player.id]
    })),
    R.sortBy((obj) => obj.order)
  );

  // Loop through each distinct score group and set the correct
  // ordering. Keep the order correct among players in the same
  // score group
  const playerIds = R.pipe(
    R.values,
    R.map(orderedGroup),
    R.flatten,
    R.map((score) => score.playerId)
  )(grouped);
  const playerOrdering = R.range(1, playerIds.length + 1);
  return R.zipObj(playerIds, playerOrdering);
};

const getPlayingOrders = (game) => {
  // First hole order is always default
  const getIds = R.map((player) => player.id);
  const initialOrdering = R.zipObj(
    getIds(game.players),
    R.range(1, game.players.length + 1)
  );

  const ordering = { 1: initialOrdering };
  const holeCount = game.course.holes.length;
  R.range(2, holeCount + 1).forEach((holeNumber) => {
    const previousOrdering = ordering[holeNumber - 1];
    const previousScores = game.scores.filter(
      (score) => score.hole.holenumber === (holeNumber - 1)
    );
    const next = getOrder(previousOrdering, previousScores);
    ordering[holeNumber] = next;
  });

  return ordering;
};

/* eslint import/prefer-default-export: 0 */
export { getPlayingOrders };
