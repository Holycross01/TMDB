const target = 30

for (let index = 1; index <= target; index++) {
    if (index % 3 === 0) {
        console.log('Fizz')
    }    

    if (index % 5 === 0) {
        console.log('Buzz')
    } 

    if (index % 3 === 0 && index % 5 === 0) {
        console.log('Fizzbuzz')
    }

    else{ console.log(index)}
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]