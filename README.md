[![Netlify Status](https://api.netlify.com/api/v1/badges/0d03570a-dd24-4456-95aa-049f0b5806cf/deploy-status)](https://app.netlify.com/sites/malins-spectrm-test/deploys)

## Live application
https://malins-spectrm-test.netlify.app

## Problems and solutions

1. 
Issue:
The API wouldn't fetch due to an issue with CORS.

Solution:
I was thinking about adding the json locally. But as I understood the instructions I was meant to do an async fetch which I read as fetching from an API.
So I opted for another solution and found services online where you can deploy a json and use that given URL instead.
I used JSONbin.io.

2.
Issue:
Figuring out how the Donut worked

Solution:
Read the documentation and found it very useful to use cmnd click to see the different options built in to the library.
Used the different attributes of the Donut for styling purposes such as placement and colours. The total amount to be rendered inside of the Donut was the other way around so I switched places so the label is the number and the number is the label. For that I had to manually sum the amount so I used the reduce() method for that.

3.
Issue:
Duplication

Solution:
Duplication was a bit of a hard nut to crack.

First I started by adding a boolean of duplicated into the initial state set to false. Which worked to change the state. But it changed the state of all charts onClick. Since I also needed an id to identify the chart I was selecting I ended up adding an id and a boolean for duplication to the API. The reasoning behind that choice was that Id for sure is something that should be provided with an API and I thought that this goes for the duplication value as well. I added the id's manually (1, 2, 3) and this of course comes with issues since the id will copy on duplication and hence not be unique. I've previously added libraries for adding unique id's but since I added it into the json I didn't have that option.

I used the find() method to find the specific chart based on id. then I set the duplicated to true (which in the component makes sure that the button is not rendered).
I found a library to duplicate in JS (just-clone). The clone that was returned, I pushed into the array by spreading and adding.

4.
Issue:
The widget/ Material UI card

Solution:
I combined a Material UI card (from which I removed things I didn't need) in which there was already a button in the right place. Then I added a Material UI menu into that button.
Using these libraries saved A LOT of time. I had all the functionality there. I just had to add an onClick for the button to dispatch the duplicate reducer.

5.
Issue:
Overwright syling of Material UI

Solution:
Most of the things were not an issue since I was adding on top of the Material UI styling. But trying to change their styling was more difficult. More specifically making the title bold.
After a Google session I managed to wrap the header in  <MuiThemeProvider theme={THEME}> and add the boldness there, which solved the issue.

6.
Issue:
Publishing to Netlify

Solution:
I have published to Netlify many times before but then I've used a different boilerplate that has incorporated the netlify.toml.
In the React start app this was missing. So I had to do some investigation and then I got it to work.

## If i'd have had more time I would've...

- Added local storage so the updated array doesn't dissapear when refreshing the page
- Find a way of dealing with the id so it doesn't duplicate
- Added a loader
- Make it responsive
## Instructions on how to run the application on a new computer
npm i 
npm start

## Planning

Before I started I made sure to plan how to approach the test. So I wrote a prioritization list:

1. Test and look at API in Postman
2. Create a thunk and reducer and make sure the API works and renders
3. Create the component containing the Material UI card / create the Donut and it's iterations
4. Create the reducer for duplication
5. Do the styling
 

 ## Summary
 It was a fun project to work with, I had to stretch my coding muscles a bit, but I really feel that I've learned from it.
 It was really great to not have to re-invent the wheel and use libraries, especially since you can still customize everything. It made those parts fast and easy and gave time to focus on other things.
 I learned to not look just at the documentation of libraries but to also use the cmnd+click in VSCode to see a much better overview of what the libraries have to offer.