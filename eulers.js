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
  console.log("===\nProblem: " + test.prob + ", User: " + test.user + ", Start time: " + test.startTime + ".")
}

function getPath(user, prob) {
  return(__dirname + "/user_sols/" + user + "/" + prob.toString() + ".js")
}

function checkAnswer(test,result) {
  if (result == test.ans) {
    var elapsedTime = new Date().getTime() - test.startTime;
    logHeader(test);
    console.log(result + " is the correct answer! Elapsed time was " + elapsedTime + ".")

    //add success test.to the results object
  }
  else {
    logHeader(test);
    console.log(result + " is incorrect. The correct answer is " + test.ans + ".")
    // add failure to results object
  }
}

function runAttempt(test) {

  var s = new sandbox()

  var path = getPath(test.user,test.prob);
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
  var params = require('./params.json');  
  var first = params.first;
  var last = params.last;

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

  console.log(tests);

  for (var i = 0; i < tests.length; i++) {
    runAttempt(tests[i]);
  }

  // Iterate through results and print winners
}

main()