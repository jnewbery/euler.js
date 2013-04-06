//User 2 notices that only every third element of the fibonacci sequence needs to be examined.

function main() {
  var sol = 0,
      pre = 1,
      targ = 2;
  while (true) {
  	if (targ>4000000) {return sol};
  	sol += targ;
   	pre = (pre + (2 * targ));
   	targ = ((2 * pre) - targ)

  }
}

main()