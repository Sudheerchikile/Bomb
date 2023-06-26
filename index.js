let timer = document.getElementById("timer");
let count = 10;
let uniqueId = setInterval(function() {
    count = count - 1;
    timer.textContent = count;
    if (count === 0) {
        timer.textContent = "Boom";
        clearInterval(uniqueId);
    }
}, 1000)
let defuser = document.getElementById("defuser");
defuser.addEventListener("keydown", function(event) {
    let defuserText = defuser.value;
    if (event.key === "Enter" && defuserText === "defuse" && count !== 0) {
        timer.textContent = "you did it";
        clearInterval(uniqueId);
    }
})