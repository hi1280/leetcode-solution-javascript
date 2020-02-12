/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const m = ["", "M", "MM", "MMM"];
  const c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return m[parseInt(num/1000)] + c[parseInt((num%1000)/100)] + x[parseInt((num%100)/10)] + i[num%10];
};