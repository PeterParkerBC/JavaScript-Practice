const caculator = {
    plus: function (a, b) {
        return a + b;
    }, 
    minus: function (a, b) {
        return a-b; 
    }, 
    times: function (a, b) {
        return a*b;
    }, 

    divide: function (a, b) {
        return a/b;
    }, 
    power: function (a, b) {
        return a**b;
    }, }; 

    const plusresult = caculator.plus(2, 3);
    const minusresult = caculator.minus(plusresult, 1);
    const timesresult = caculator.times(minusresult, 3);
    const divideresult = caculator.divide(timesresult, 3);
    const powerresult = caculator.power(divideresult, plusresult);

        console.log(plusresult, minusresult, timesresult, divideresult, powerresult); 