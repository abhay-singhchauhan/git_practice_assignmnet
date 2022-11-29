
let count = 0;
let a = 11;

//loop deciding if prime or not
for(let i = 0; i <= a; i++) {
    if(a%i !== 0) {
        count++
    }
}

//if else statments
if(count === 2) {
    console.log("True")
} else {
    console.log("False")
}