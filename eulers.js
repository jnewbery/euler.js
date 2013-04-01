var fs = require('fs');
var vm = require('vm');

function get_path(user, prob) {
  return(__dirname + "/user_sols/" + user + "/" + prob.toString() + ".js")
}

function run_attempt(prob, user, ans, path, start_time) { //capture problem number, user, answer, path and start time
  fs.readFile(path, 'utf8', function (err, data) {
    console.log("===\nProblem: " + prob + ", User: " + user + ", Start time: " + start_time + ".")
    if (err) {
      console.log("Unable to read solution script.");
      return;
    }
          
    var sol = vm.runInNewContext(data);
    if (sol == ans) {
      var elapsed_time = new Date().getTime() - start_time;
      console.log(sol + " is the correct answer! Elapsed time was " + elapsed_time + ".")

      //add success to the results object
    }
    else {
      console.log(sol + " is incorrect. The correct answer is " + ans + ".")
      // add failure to results object
    }
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

  // Create an object for the results

  // Iterate through the users
  for (var i = 0; i < users.length; i++) {
    user = users[i];
    
    // Iterate through the problems
    for (var prob = first; prob <= last; prob++) {

      // Get the time now
      var start_time = new Date().getTime();
      
      // Get the path and run the script
      var path = get_path(user,prob);
      
      run_attempt(prob,user,answers[prob],path,start_time);
      
    }
      // Iterate through results and print winners

  }
}

main()