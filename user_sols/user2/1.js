//User 2 sums all the multiples of 3, then 5, then subtracts the multiples of 15
//Sum of 1 to x is x(x+1)/2 => sum of multiples of 3 from 3 to 3x is 3(x)(x+1)/2

function sum(x) {
  top = Math.floor(999/x);
  return (x * top * (top+1))/2
  top
}

function main() {
  var sol = 0;

  sol += sum(3);
  sol += sum(5);
  sol -= sum(15);

  return sol;
}

main()