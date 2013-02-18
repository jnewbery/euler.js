#euler.py

A framework for running Project Euler solution programs competitively.

To set the framework up, add users to the the users.cfg file, add a directory for each user to the user_sols directory and add the user's solution programs to their directory. The user's directory must be named &lt;user&gt; and the solution program must be named &lt;x&gt;.py. The solution program should output just the solution to the problem. Any other output will result in the solution being marked as incorrect.

### Extending

The naming scheme or languages accepted can easily be updated by changing the make_command() function.

### Note

The solutions.txt file is incomplete.

### Attribution

Originally written by John Newbery, Mark Brenig-Jones and Jonathan Basseri in summer 2012. Any value from the project can be attributed to Mark and Jonathan. Any crassness can be attributed to John.