var fs = require('fs');

function make_command(user,j) {
  return(__dirname + "/user_sols/" + user + "/" + j.toString() + ".js")
}

function handle_answer(user,problem,answer) {
  return;
}

function main() {

  //Get the users
  var users = require('./users.json');

  //Parse the parameters
  var first = 1;
  var last = 1;

  // Get the solutions
  var answers = require('./answers.json');

  for (var i = 0; i < answers.length; i++) {
      console.log(answers[i].answer);
  }

  // Create an object for the results

  // Iterate through the users
  for (var i = 0; i < users.length; i++) {
    user = users[i].name;
    console.log(user);
    
    // Iterate through the problems
    for (var j = first; j <= last; j++) {
    
      console.log("problem " + j)
      
      // Get the time now
      var scriptstart = new Date().getTime();
      console.log("time now is " + scriptstart);
      
      // Construct command and run it
      var command = make_command(user,j);
      console.log("command is " + command);
      
      fs.readFile(command, 'utf8', function (err, data) {
        if (err) throw err;
        eval(data)
      });
      
      
//      
//      var spawn = require('child_process').spawn
//      var cmd = spawn('node', [command], {cwd: process.cwd()});
//      
//      cmd.stdout.on('data', function (data) {
//        handle_answer(user,j,data);
//        console.log('stdout: ' + data);
//      });
        // Get the time now and add the result to the results object
      
    }
      // Iterate through results and print winners

  }
}

main()