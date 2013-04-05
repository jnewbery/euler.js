//User 1 iterates through 1 to 1000 and checks for divisibility by 3 or 5

function main() {
  var sol = 0;
  for (var i = 0; i < 1000; i++) {
  	if (!(i%3) || !(i%5)) {
  		sol +=i;
  	}
  }
  return sol;
}

main()