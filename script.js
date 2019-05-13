var createPolitician = function(name, partyColor) {
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor; 

    politician.addTotalVotes = function() {

        this.totalVotes = 0;
  
        for (var i = 0; i < this.electionResults.length; i++) {
        
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
  
    };
    
    return politician;    
};

var douglas = createPolitician("Douglas Biltmore", [132, 17, 11]);
var fox = createPolitician("Fox Hayden", [245, 141, 136]);

douglas.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];
fox. electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

setStateResults = function(state) {
    theStates[state].winner = null;
    if (douglas.electionResults[state] > fox.electionResults[state]) {
       theStates[state].winner = douglas;
    }
    
    else if (douglas.electionResults[state] < fox.electionResults[state]) {
       theStates[state].winner = fox;
    }
    
    var stateWinner = theStates[state].winner
        if (stateWinner !== null) {
            theStates[state].rgbColor = stateWinner.partyColor;
        }

        else {
            theStates[state].rgbColor = [11,32,57];
        }
    
    var stateInfoTable = document.getElementById("stateResults");
    var header = stateInfoTable.children[0].children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0];
    var abbrev = header.children[1];
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

console.log(douglas.totalVotes);
console.log(fox.totalVotes);

var winner = ("?");

  if (douglas.totalVotes > fox.totalVotes) {
      winner = douglas.name;
    }

  else if (douglas.totalVotes < fox.totalVotes) {
     winner = fox.name;
    }

  else {
    winner = "Draw!"
    }

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = douglas.name;
row.children[1].innerText = douglas.totalVotes;
row.children[2].innerText = fox.name;
row.children[3].innerText = fox.totalVotes;
row.children[5].innerText = winner;

console.log("THE WINNER IS " + winner + "!");
console.log("Douglas's color is " + douglas.partyColor);
console.log("Fox's color is " + fox.partyColor);
