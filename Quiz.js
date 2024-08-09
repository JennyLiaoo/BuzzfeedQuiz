"use strict";
function submit() {
    //radio buttons (works)
    const ummmBtn = document.getElementById("ummm");
    const maybeBtn = document.getElementById("maybe");
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");

    let answer = "";
    if(ummmBtn.checked) {
        answer = "ummm";
    } else if(maybeBtn.checked) {
        answer = "maybe";
    } else if(yesBtn.checked) {
        answer = "yes";
    } else if(noBtn.checked) {
        answer = "no";
    } else {
        answer = "(Not Answered)";
    }


    //checkbox buttons still can't get them to print out :(

    const food = document.getElementById("food");
    //let foodAnswer = "";
    //if(foodBtn.checked) {
    //    foodAnswer = "yes";
    //} else {
    //    foodAnswer = "no";
    //}


    //textbox for other animals(works)
    const others = document.getElementById("others");
    let otherAnimal = others.value;

    //drop down button, yes or no (works)
    const money = document.getElementById("money");
    let index = money.selectedIndex;
    let moneyType = money.options[money.selectedIndex];
    let moneyText = money.options[money.selectedIndex].text;

    //quantity of money chosen (half works)
    const quantity = document.getElementById("quantity");
    let quantityStr = quantity.value;
    let amountMoney = Number(quantityStr);

    //name person gave (works)
    const name = document.getElementById("name");
    let person = name.value;

    //credit card number given (works)
    const credit = document.getElementById("credit");
    let creditNum = credit.value;

    //output part
    const output = document.getElementById("printout");
    output.innerText = `Thank you, ${person}!`;

    output.innerHTML += `<p>Are you ready? ${answer}</p>`;
    //output.innerHTML += `<p>Do you like food? ${foodAnswer}</p>`;
    output.innerHTML += `<p>Your favorite animal is:  ${otherAnimal}! That's cool</p>`;
    output.innerHTML += `<p>Do you want money? you chose: ${moneyText}</p>`;
    output.innerHTML += `<p>${amountMoney} dollars are on the way</p>`;
    output.innerHTML += `<p>Your credit card number is  ${creditNum}</p>`;

}
function cancel() {
    const name = document.getElementById("name");
    let person = name.value;

    //output when press cancel button
    const output = document.getElementById("printout");
    output.innerText = `Goodbye ${person} :(`;

}
