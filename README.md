# U.S. Decision Map - *app project*
**A JavaScript project with an interactive map**

## General info

Here is a project of an interactive U.S. map that uses JavaScript.  It is a fictional election race between two candidates.  This allows the user to hover over each of the 50 states, which will color them in. At the same time, this provides the user with all the information and results for that state in a chart.  He can then see the state name and what the final votes were for each candidate.  It also tells who won that state, or if there was a "*DRAW!*"

The purpose of this project was to further learn how to code using JavaScript. This helped to teach how to use *arrays* in an object for indexing information. It also taught the use of objects using *factory functions*.  Too, it provides practice with programming information to be dynamically applied to a table.

I was inspired to complete this project to further refine the thought process of JavaScript code.  When combined with a table, I was amazed to see what can be produced.  As a web developer, I was able to dive deeper into arrays and see the power of what they can accomplish.  I had fun seeing yet another project come to life. 

## Technologies

- HTML (provided)
- CSS (provided)
- JavaScript


## Code Examples

```
var candidate1Name = body.children[0].children[0];
   var candidate2Name = body.children[1].children[0];
   var candidate1Results = body.children[0].children[1];
   var candidate2Results = body.children[1].children[1];
   var winnersName = body.children[2].children[1];

   stateName.innerText = theStates[state].nameFull;
   abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
   candidate1Name.innerText = douglas.name;
   candidate2Name.innerText = fox.name;
   candidate1Results.innerText = douglas.electionResults[state];
   candidate2Results.innerText = fox.electionResults[state];
 
   if (theStates[state].winner ===null) {
     winnersName.innerText = "DRAW!";     
   }
  
   else {   
     winnersName.innerText = theStates[state].winner.name;
   }
  
}

douglas.addTotalVotes();
fox.addTotalVotes();
  
```
  
## Setup

This project was built and added to my [personal portfolio website](http://www.bryanwesleyherbert.com/decision-map/)

## Status

Project is: *finished*

## Sources

This app tutorial was provided by **Skillcrush** - *online course*

HTML5 map created by [DougX.net](http://www.dougx.net/map/usmap.html)


## Contact

Created by **Bryan Herbert** [bryanwesleyherbert.com](http://www.bryanwesleyherbert.com) / email: bryan77@twc.com - Feel free to contact me!




  
  








