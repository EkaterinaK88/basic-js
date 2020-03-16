module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = 0;
  for (let i = 0; i < diskNumber; i++) {
    turns += Math.pow(2,i);
  }
  let seconds = turns / (turnsSpeed / 3600);
  
  return {turns: turns, seconds: seconds};
}
