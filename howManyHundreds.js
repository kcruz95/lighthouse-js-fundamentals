function howManyHundreds(num) {
  let x = num;
  let y =  num % 100;
  let z = x - y;
  return z / 100;
}
