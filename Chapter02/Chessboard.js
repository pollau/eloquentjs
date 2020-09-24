let size = 11;
let line = ' #'.repeat(size / 2);


for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log(line + ' ');
    }
    else {
        console.log(line.substring(1) + ' #');
    }
}