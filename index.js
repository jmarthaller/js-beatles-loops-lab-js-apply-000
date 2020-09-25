// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let result = [];
  
  for (i = 0; i < musicianArray.length; i++) {
    for (j = 0; j < instrumentArray.length; j++)
    result += `${musicianArray[i]} plays ${instrumentArray[j]}`;
  }
  return result;
}