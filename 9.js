let binary = "111";
let decimal = 0;

for (let i = 0; i < binary.length; i++) {
   
    let bit = binary[binary.length - 1 - i];

    if (bit === '1') {
        decimal += Math.pow(2, i); 
    }
}

console.log("Decimal value of binary", binary, "is:", decimal);
