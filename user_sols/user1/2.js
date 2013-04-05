//User 1 checks every term in the fibonacci sequence for even-ness

function main() {
  var sol = 0,
      first = 1,
      second = 1,
      add = 0;
  while (true) {
  	add = first+second;
  	if (add>4000000) {return sol};
  	if (!(add%2)) {sol += add};
  	first = second;
  	second = add;
  }
}

main()