const repeat = (functionToRepeat, n) =>{
    for(i=0;i<n;i++){
        functionToRepeat(i+1)
    }
}

const funToRepeat = n =>{
    PrintString(n)
}

const PrintString = n => console.log("Execution number: " + n);

repeat(funToRepeat,4)