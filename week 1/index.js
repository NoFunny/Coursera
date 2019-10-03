 /**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  var initialMinutes = hours * 60 + minutes + interval;
  var newHours = Math.floor(initialMinutes / 60);
  var newMinutes = initialMinutes % 60;
  var daysAmount = Math.floor(newHours / 24);

  var fixedNewHours;
  if (daysAmount >= 1) {
    fixedNewHours = newHours - 24 * daysAmount;
  } else {
    fixedNewHours = newHours;
  }

  var stringHour = fixedNewHours < 10 ? '0' + fixedNewHours : String(fixedNewHours);
  var stringMinutes = newMinutes < 10 ? '0' + newMinutes : String(newMinutes);

  var result = stringHour + ':' + stringMinutes;
  return result;
};