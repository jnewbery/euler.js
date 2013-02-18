#euler.js

A port of the [euler.py](https://github.com/jonnynewbs/euler.py) project to node.js. Some of the ideas in here will eventually make it to the more ambitious [eulernode](https://github.com/jonnynewbs/eulernode) project.

This is a framework for running Project Euler solution javascript programs competitively in node.

To set the framework up, add users to the the users.json file, add a directory for each user to the user_sols directory and add the user's solution programs to their directory. The user's directory must be named &lt;user&gt; and the solution program must be named &lt;x&gt;.js. The solution program should output just the solution to the problem. Any other output will result in the solution being marked as incorrect.

### Extending

The naming scheme or languages accepted can easily be updated by changing the make_command() function.

### Note

The solutions.json file is incomplete.

### Credits

Originally created by [@jonnynewbs](https://github.com/jonnynewbs)