// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let result = [];
  
  for (let i = 0; i < musicianArray.length; i++) {
    result.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return result.split(' ');
}