let a = [1, 5, 2, 3, 10, 9, 8, 7, 6];


let biggest = a[0];
let smallest = a[0];


for (let i = 1; i < a.length; i++) {
    if (a[i] > biggest) {
        biggest = a[i]; 
    }
    if (a[i] < smallest) {
        smallest = a[i]; 
    }
}

console.log("Biggest element:", biggest);
console.log("Smallest element:", smallest);
