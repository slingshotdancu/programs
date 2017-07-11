let getRandomNum = (function() {
    return function() {
alert("it ran");
        return Math.floor(Math.random() * 4) + 1;
    }    
});

getRandomNum();
