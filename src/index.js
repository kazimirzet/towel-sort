
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix==undefined){
      return [];
    }else{
    let newMatrix=[];
    for(i=0;i<matrix.length;i++){
      if(i%2==0){
        newMatrix=newMatrix.concat(matrix[i]);
      }else{
        newMatrix=newMatrix.concat(matrix[i].reverse());
      }
    }
    return newMatrix; 
  }
}
