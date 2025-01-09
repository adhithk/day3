for (let i = 1, count = 0; count < 5; i++) {
    let result = (i % 5 === 0) ? i + 3 : i * 5;
    if (i % 5 === 0) count++;
    console.log(result);
}
