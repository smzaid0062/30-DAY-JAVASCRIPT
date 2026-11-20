function outerFunction(){
    let outerVariable = " I am outside!";

    function innerFunction(){
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClouser = outerFunction();
myClouser();