Array.prototype.killTheInsolent = function(){};
Array.prototype.countPopulace = function(){};
Array.prototype.countUndeadPopulace = function(){};
Array.prototype.incesticide = function(){};
Array.prototype.shadowProvider = function(){};

var invertedPeninsula = {
  inhabitants: ["Nipping Global Variable", "Sneaky For-in", "Bulging Blocking Script"]
};

function populationGetter(){
  var population = invertedPeninsula.inhabitants;
  var list = "";
console.time('list');

  for(var i = 0, ff = population.length; i < ff; i++){
    list += (population[i] + " ");
  }
  
console.timeEnd('list');
  return list.trim();
}

populationGetter();
