var pocketStuff = ["Dragon Tooth", "Adventure Diary", "Silver Tiger Coin"];
var cluesToThePast = pocketStuff || [] ;
getMyIdentity(cluesToThePast);

function getMyIdentity( memories ){
  var identity = ( memories.indexOf("Adventure Diary") >= 0 ) ? "The One Who Learns" : undefined;
  return identity || "unknown";