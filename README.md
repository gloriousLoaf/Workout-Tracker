# Workout Tracker
A tracking app for all of your physical activities. MongoDB/Mongoose, Express, Node.

![GitHub language count](https://img.shields.io/github/languages/count/gloriousLoaf/Workout-Tracker)
![GitHub top language](https://img.shields.io/github/languages/top/gloriousLoaf/Workout-Tracker)

## Table of Contents
* [Description](#-description)
* [Installation](#-installation)
* [Usage](#-usage)
* [License](#-license)
* [Contributors](#-contributors)
* [Questions](#-questions)
<p>&nbsp;</p>

## Description
This app uses a NoSQL (MongoDB) database to store user workout sessions, with details collected per each exercise type. Previous workouts can be updated. The most recent session's details are displayed on the index page, and a detailed stats page uses **Chart.js** to turn the most recent 7 entries in the database into colorful charts showing the user's progress and momentum.
<p>&nbsp;</p>

## Installation
To install, clone this repo and setup a MongoDB instance on your local machine. Open Bash or your prefered CLI, and run ``` mongod ``` to instantiate. From a different terminal, navigate to the root folder of this repo, run ``` npm install ``` to get the dependencies. Then run ``` node server ``` to start the server on localhost:3000. Navigate to this location in your browser and begin your workout plan! (Does coding count as resistance training?) This app will be deployed live using **ObjectRocket on Heroku**, see it in action (here)[heroku link available by 08/4/2020]. See Heroku's documentation on hosting your app through their PaaS. 
<p>&nbsp;</p>

## Usage
The user can simply open the app, click the **New Workout** button to start tracking their activity. Each Exercise should be added by clicking the **Add Exercise** button, *except for the final exercise* which should be added by clicking the **Complete** button. Then user can head to the **Dashboard** link in the navbar to view their progress in helpful charts.
<p>&nbsp;</p>

---
<p>&nbsp;</p>

## License
Open Source, use and modify as you see fit.
<p>&nbsp;</p>

## Contributors
Just myself, the author.
<p>&nbsp;</p>

## Questions?
  * **David Metcalf**
  * **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
  * <davidmetcalfwork@gmail.com>

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
<p>&nbsp;</p>

---

##### This markdown was created with [Readme Generator](https://github.com/gloriousLoaf/Readme-Generator)