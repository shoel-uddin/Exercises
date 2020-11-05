let n = printBanner.length
function printBanner (something){
    console.log('-' * 5)
    console.log('-', something, '-')
    console.log('-' * 5)
}
printBanner("Well Hello and Welcome")


function printBanner (text){
    let l = text.length;
    let s = '';
    for (let i = 0; i < l+2; i++){
        s += '-';
    }
    console.log(s)
    console.log ('-'+text+"-")
    console.log(s)
}

printBanner("This is it")