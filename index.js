// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let result = [];
  
  for (let i = 0; i < musicianArray.length; i++) {
    result += `${musicianArray[i]} plays ${instrumentArray}`;
  }
  return result.split(' ');
}