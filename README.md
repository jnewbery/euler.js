#euler.js

A port of the [euler.py](https://github.com/jonnynewbs/euler.py) project to node.js. Some of the ideas in here will eventually make it to the more ambitious [eulernode](https://github.com/jonnynewbs/eulernode) project.

This is a framework for running Project Euler solution javascript programs competitively in node.

To set the framework up, add users to the the users.json file, add a directory for each user to the user_sols directory and add the user's solution programs to their directory. The user's directory must be named &lt;user&gt; and the solution program must be named &lt;x&gt;.js. The solution script just needs to return the solution to the problem. Any output will be ignored.

### Note

The solutions.json file is incomplete - 0 is used as a placeholder for unfilled solutions.

### Credits

Originally created by [@jonnynewbs](https://github.com/jonnynewbs)