const result = document.getElementById("results");
const image = document.getElementById("diceimage");
let number;
let results = [];
let img = [];

function roll() {

let values = document.getElementById("noOfDice").value;
if(values<=10 && values>0){


    for (let i = 0; i < values; i++) {

        number = Math.ceil(Math.random() * 6);
        results.push(number); 
        img.push(`<img src="${number}.png">`);
    }

    result.textContent = `${values} Dice : ` + results.join(",");
    image.innerHTML = img.join("");

    
}

else{
    image.innerHTML ="";
    result.textContent = "Invalid Input. Input range allowed is [1,10]";
}

}


