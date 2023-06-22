let globalVar = 'I am global!';


function outerFunction(){
    let outerVar = 'I am outer!';
   
    function innerFunction(){
        let innerVar = 'I am inner!';
        console.log(outerVar);
        console.log(globalVar);
        console.log(innerVar);

        if(2 ===2)
            innerVar = 'inner var within a 2===2';

        console.log(innerVar);
    }
    
    innerFunction();
    //console.log(innerVar);
   
}
outerFunction();
//console.log(outerVar);

function multiple(x, y){

}
var multiple = (x,y) => x*y;

console.log(multiple(2, 2));
