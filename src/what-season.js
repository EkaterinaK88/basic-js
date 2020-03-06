module.exports = function getSeason(date){
  let season;
  if (date === undefined) {
    season = 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error("Invalid data type");
    } else {
  switch (date.getMonth()) {
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    case 8:
    case 9:
    case 10:
      season = "autumn";
      break;
    case 11:
    case 0:
    case 1:
      season = "winter";
      break;
  }
  }
  return season;
};
