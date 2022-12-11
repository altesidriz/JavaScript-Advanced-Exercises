function diagonalSum(matrix){
    let rowL = matrix.length;

    for (let i = 0; i < rowL; i++){
        
        for (let element = 0; element< matrix[i].length; element++){
            console.log(matrix[i][element]);
        }
    }

}
diagonalSum([[1,2],[2,3]])