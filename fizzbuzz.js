export let fizzbuzz = function (number) {
  let data = "";
  if (number % 3 == 0) {
    data += "Fizz";
  }
  if (number % 5 == 0) {
    data += "Buzz";
  }
  return data || number;
};
