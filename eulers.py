#!/usr/bin/python

from __future__ import print_function
import datetime
import subprocess
import sys
from collections import defaultdict as ddict

def make_command(i,user):
    # function to make the command string.
    return  ["python","user_sols/%s/%s.py" % (user,i)]       

def main(params):

    # Get the users
    users = []
    for user in open("users.cfg",'r').readlines():
        users.append(user.rstrip())

    # Parse params
    try:
        start = int(params[1])
    except(IndexError):
        start = 1
    try:
        end = int(params[2]) + 1
    except:
        end = 2
    total = (end - start)
    try:
        if (params[3] == "all") or (params[3] not in users):
            users = users
        else:
            users = [params[3]]
    except:
        users = users

    # Get solutions. Index zero is null
    sols =[False]
    for sol in open("solutions.txt",'r').readlines():
        sols.append(sol.rstrip())
            
    results = ddict(list)
    for user in users:
        print(user)
        correctcount = 0
        allstart = datetime.datetime.now()
        
        for i in xrange(start,end):
            
            # Print the script number
            print(i, end='\t')
            
            # Get the time now
            scriptstart = datetime.datetime.now()

            # Construct command, try to run it and print result
            command = make_command(i,user)
            if command:
                sol = subprocess.Popen(command,stdout=subprocess.PIPE).stdout.readline().rstrip()
                if sols[i] == '':
                    print("no solution in solutions.txt!!!") #update solutions.txt with the correct answer
                if sol == sols[i]:
                    correctcount += 1
                    print("Correct!",end='\t')
                    runtime=str(datetime.datetime.now() - scriptstart)
                    results[i].append( (runtime, user) )
                else:
                    print("Incorrect",end='\t')
                    runtime = "Loser!"
            else:
                print("Missed",end='\t')
                runtime = "Did not compete"

            # Print the time taken
            print(runtime)

        print("%s of %s correct. %.1f%% coverage" % (correctcount, total, 100*float(correctcount)/total))
        print ("TOTAL\t\t" + str(datetime.datetime.now() - allstart))

    # Winner winner chicken dinner...
    for i in xrange(start, end):
        scores = results[i]
        if scores:
            scores.sort(lambda x,y: cmp(x[0],y[0]))
            print("Game %s: Winner: %s" % (i, scores[0]))
        else:
            print("Game %d: No winner" % i)

if __name__ == "__main__":
    """Usage - eulers.py <first> <last> <user>|'all'
    where <first> is the index of the first euler problem to run and <last> is the last euler problem to run
    """
    main(sys.argv)
