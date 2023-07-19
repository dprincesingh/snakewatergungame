const match = (user, cpu) => {
    if (user === cpu) {
        return "Draw";
    } else if (user === "s" && cpu === "w") {
        return "Win";
    } else if (user === "s" && cpu === "g") {
        return "loose";
    } else if (user === "w" && cpu === "s") {
        return "loose";
    } else if (user === "w" && cpu === "g") {
        return "win";
    } else if (user === "g" && cpu === "s") {
        return "Win";
    } else if (user === "g" && cpu === "w") {
        return "loose";
    }
};

let user = "";
let arr = ["s", "w", "g"];
let cpu = "";
let cpu_score = 0;
let user_score = 0;
let result = "";
do {
    user = prompt("Enter (s, w, g):").toLowerCase();
    if (user === "y") {
        console.log("Thank you for playing ");
        console.log("Your score is " + user_score + " and " + "cpu score is " + cpu_score);
    } else if (!arr.includes(user)){
        console.log("Kindly Enter (s, w, g): or y-to exit=");
    } else{
        cpu = arr[Math.floor(Math.random() * arr.length)];
        result = match(user, cpu);
        if (result === "win") {
            user_score++;
        } else if (result === "loose") {
            cpu_score++;
        }
        console.log(result);
    }
} while (user !== "y");
