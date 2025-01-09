let a = [1, 5, 2, 3, 10, 9, 8, 7, 6];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
            
            a[j] = a[j] + a[j + 1];
            a[j + 1] = a[j] - a[j + 1];
            a[j] = a[j] - a[j + 1];
        }
    }
}

console.log(a); 
