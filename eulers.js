var fs = require('fs');
var vm = require('vm');

function get_path(user,prob) {
  return(__dirname + "/user_sols/" + user + "/" + prob.toString() + ".js")
}

function main() {
  //Get the users
  var users = require('./users.json');

  //Parse the parameters
  var first = 1;
  var last = 1;

  // Get the solutions
  var answers = require('./answers.json');

  // Create an object for the results

  // Iterate through the users
  for (var i = 0; i < users.length; i++) {
    user = users[i];
    console.log(user);
    
    // Iterate through the problems
    for (var prob = first; prob <= last; prob++) {
    
      console.log("problem " + prob)
      
      // Get the time now
      var scriptstart = new Date().getTime();
      console.log("Time now: " + scriptstart);
      
      // Get the path and run the script
      var path = get_path(user,prob);
      
      (function() { //wrap callback to capture correct answer for checking -- should split this off as a named function and capture user, problem number and start time.
        var ans = answers[prob]
        fs.readFile(path, 'utf8', function (err, data) {
          if (err) throw err;
          
          var sol = vm.runInNewContext(data);
          if (sol == ans) {
            console.log(sol + " is the correct answer!")
          }
          else{
            console.log(sol + " is incorrect! " + ans + " is correct")
          }
        });
      })();  
      
        // Get the time now and add the result to the results obprobect
      
    }
      // Iterate through results and print winners

  }
}

main()