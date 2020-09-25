// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let result = [];
  
  for (let i = 0; i < musicianArray.length; i++) {
    result.push(musicianArray[i] + ' plays ' + instrumentArray[i]);
  }
  return result;
}

function johnLennonFacts (facts) {
  let result = [];
  let i = 0;
  
  while (i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}