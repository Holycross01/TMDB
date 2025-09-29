// const target = 30

// for (let index = 1; index <= target; index++) {
//     if (index % 3 === 0) {
//         console.log('Fizz')
//     }    

//     else if (index % 5 === 0) {
//         console.log('Buzz')
//     } 

//     else if (index % 3 === 0 && index % 5 === 0) {
//         console.log('Fizzbuzz')
//     }

//     else{ console.log(index)}
// }


   const target = 30;

for(let i = 1; i <= target; i++){

    if(i % 3=== 0  && i % 5=== 0){
        console.log('fizzbuzz')
    }
    else if(i % 3 === 0){
        console.log('fizz')

    }else if(i % 5 === 0){
        console.log('buzz')
    }
    else{
        console.log(i)
    }
}