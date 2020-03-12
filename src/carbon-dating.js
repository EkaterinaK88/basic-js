const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let year;
  let k = 0.693/HALF_LIFE_PERIOD;
  if (typeof sampleActivity != 'string' || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >  
15 || isNaN(parseFloat(sampleActivity))) {
    year = false;
  } else {
    year = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
  }
  return year;
};
