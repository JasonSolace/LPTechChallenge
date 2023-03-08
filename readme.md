This is for the Coding Challenge assigned to me by LP Technologies.
If you are only interested in testing this without reading my thoughts/challenges, please feel free to skip down to the "---How To Set Up--" section!

This challenge took me a total of 6.5 hours to complete. Here is the breakdown of how it went down:

- 0.6 hours of Planning
- 2 hours of learning new technologies (Node.JS and React)
- 2.5 hours of implementing solution with drawn graph
- 1.5 hours of debugging as well as attempting to fix GitHub.

Unfortunately, I accidently created a repo of my "client" folder, and even though I was attempting fixes online, none of them were working. I decided to just move on and create a clean repo with each folder as a commit. In reality, this is how it went down:
1. Created Back-end framework and tested functionality on port localhost:8800
2. Began implenting more front-end framework while testing API. At this point, I was able to communicate between client and backend.
3. I added a new Back-End API command to grab one trace_data from mySQL as well as the ability to grab the trace_date.
4. With this new access, I began creating the graph while it auto updates itself with new values.

Challenges I found:
- Learning new technologies such as Node.JS and React took me a bit longer than I expected. Time flew, but I understand it so much more than I did before.
- Creating an API through JavaScript was new to me. I've only ever done this through PHP, but I found the concept to not be too far off
- I've never created anything graphically using the various react libraries. I started over more than I'd like to admit, but found myself to be a fan of Google Charts!

This was a very fun project, and although I was tearing my head off attempting to learn these new libraries, the knowledge I gained from it is invaluable. 

-------HOW TO SET UP--------------

1. *MAKE SURE YOU HAVE THE LATEST VERSION OF NODE.JS INSTALLED!*

I was able to test this using a XAMPP server with Apache and MySQL on. Here's how I did it:
1. Start XAMPP Apache and MySQL
2. Access localhost/phpmyadmin and create the Database. From here, add the SQL file given with this challenge.
3. Clone this REPO and make sure the Database Connection credentials are correct for your setup. This file is located in "backend/index.js". It is at the top and commented "Database Connection".

Once you have your database setup and running, you then have to start the BackEnd services:
1. Open your terminal inside the backend folder (or you can open it in "LPTechnologies" and "ls backend") 
2. Run: "npm install cors mysql express nodemon".
3. From here, we can run "npm start" and can began testing the backend.
4. The port this is hosted on is Port 8800. With that, going to "localhost:8800" should get you a message saying "Welcome to the Backend". You can test the API by running "localhost:8800/data/1".

After this, it is time to start the front-end client that runs on React:
1. Open your terminal inside the client folder
2. Run "npm install react-router-dom axios react-google-charts"
3. At this point, we can start the frontend by typing "npm start"
4. Once this server starts up, it is hosted on what seems like the React default port at localhost:3000. Here, you should be able to see the chart incrementing through and updating every 1 second.

Here's a video of it in action: YOUTUBE LINK GOES HERE
-----------------------------------------
Final note: I apologize if there's a better way of installing and starting these libraries. React is still pretty new to me as is Node.JS, but I was able to grasp enough to finish this project through the course of a work day. I didn't include the time writing this ReadMe in there nor my time testing this on a different computer to make sure it works, but if we were, I'd say I spent another 1.5 hours on it.

Thank you for your consideration and time!
