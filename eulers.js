var fs = require('fs');
var vm = require('vm');
var sandbox = require('sandbox')

Array.prototype.shuffle = function() {
  var i = this.length, j, tempi, tempj;
  if ( i == 0 ) return this;
  while ( --i ) {
     j       = Math.floor( Math.random() * ( i + 1 ) );
     tempi   = this[i];
     tempj   = this[j];
     this[i] = tempj;
     this[j] = tempi;
  }
  return this;
}

function logHeader(test){
  return ("Problem: " + test.prob + ", User: " + test.user + ", Start time: " + test.startTime + " :: ");
}

function checkAnswer(test,result) {
  var log = logHeader(test);
  if (result == test.ans) {
    var elapsedTime = new Date().getTime() - test.startTime;
    log += (result + " is the correct answer! Elapsed time was " + elapsedTime + ".");
    //add success test.to the results object
  }
  else if (result == "TimeoutError") {
    log += ("Solution timed out!")
    // add failure to results object
  }
  else {
    log += (result + " is incorrect!")
    // add failure to results object
  }
  console.log(log)
}

function runAttempt(test,timeout) {

  var s = new sandbox({timeout:timeout}) 

  var path = (__dirname + "/user_sols/" + test.user + "/" + test.prob.toString() + ".js");
  startTime = new Date().getTime();
  test.startTime = startTime;
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      logHeader(test);
      console.log("Unable to read solution script.");
      return;
    }
          
    s.run(data,function(output) {checkAnswer(test,output.result)});
 
  });
}

function main() {
  //Get the users
  var users = require('./users.json');

  //Get the parameters
  var params = require('./params.json'),
      first = params.first, //the first script to be run.
      last = params.last, //the last script to be run.
      timeout = params.timeout; //the maximum time allowed for each script.

  // Get the solutions
  var answers = require('./answers.json');

  var tests = new Array();

  // Create an object for the results

  // Iterate through the users
  for (var i = 0; i < users.length; i++) {
    user = users[i];
    
    // Iterate through the problems
    for (var prob = first; prob <= last; prob++) {
      tests.push({prob:prob,user:user,ans:answers[prob]});
    }
  }
  tests.shuffle();

  for (var i = 0; i < tests.length; i++) {
    runAttempt(tests[i],params.timeout);
  }

  // Iterate through results and print winners
}

main()