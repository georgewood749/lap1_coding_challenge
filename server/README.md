# lap1_coding_challenge
## George &amp; Kai's Google API

This week's coding challenge requires us to create our own simplistic version of Google.

## Installation and Usage
##### Installation
-Clone the repo into a folder of your choosing on your machine.
-Once you have cloned the repo and opened in VS Code, enter `cd server` in the terminal to move into the server directory.
-You'll need to install the node modules used in the project, this can be achieved by typing `npm i` or `npm install`.
-Once you have the required node packages installed, you'll need to enter `npm run dev` in the terminal to start up the server.


##### Usage
Once the server is running, you can open the page using live server.
Try entering a keyword in the search bar to filter results from our data set.
When you enter a search keyword, either press the "Woogle Search" button, or hit return to display the results.
The page will display ten search results. If there are not 10 results for your keyword, ten results will still be displayed, but the remainder will be populated with sponsored content.

You can click the "Feeling Lucky" button to display a random item of sponsored content.
If you click the Woogle logo, all items will be displayed on screen.

We've included hyperlinks to Google's pages for each of the header and footer navigation items.
However, we are yet to add functionality for the apps and profile buttons in the top right.

## Changelog


## Bugs
-Footer was not displaying on the bottom of the page due to the results section. The footer was only dropping to the bottom of the page after a search has been run. This was solved by using fixed positioning for the footer and some hard-coding.


## Wins and Challenges
##### Wins
-Functionality works as intended
-Styling matches Google's own quite well
-No issues with the server

##### Challenges
-Some styling required hard-coding to get the intended effect, we've attempted to avoid this where possible however, but due to time contstraints some css properties have remained hard-coded.
