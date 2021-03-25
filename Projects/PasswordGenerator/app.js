// Generator Functions

// Function that returns a random index of a string value that is passed in as an argument.
function randomIndex(str){
    return Math.floor(Math.random()*str.length)
}

// Function that returns a random letter using a random index in the "letters" string varaible
function randomLetter(){
    const letters=`abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}

// Uses "randomLetter" function to get a letter, sets it to its uppercase equivalent and returns it.
function getRandomUpper(){
    return randomLetter().toUpperCase();
}

// Uses "randomLetter" function to retrieve a letter, and returns it.
function getRandomLower(){
    return randomLetter();
}

// Returns a random string integer value between 0 and 9.
function getRandomNumber(){
    const numbers=`1234567890`;
    return numbers[randomIndex(numbers)];
}

function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=<>/,.';
    return symbols[randomIndex(symbols)];
}

function getRandomArray(arr, val){
    let check1=false;
    let check2;
    let count;
    let newArr;
    // Until an array including all the items is returned, loops.
    while(!check1){
        count=0;
        newArr=[];
        for (i=0;i<val;i++){
            newArr.push(Math.floor(Math.random()*arr.length));
        }
        console.log(newArr);
        for (i=0;i<arr.length;i++){
            check2=false;
            for(n=0;n<newArr.length;n++){
                if(newArr[n]===i){
                    check2=true;
                }
            }
            if(check2===true){
                count++;
            }
        }
        if(count===arr.length){
            check1=true;
        }
    }
    console.log(newArr);
    return newArr;
}

// Object to store all the generator functions
const randomFunc={
    upper:getRandomUpper,
    lower:getRandomLower,
    number:getRandomNumber,
    symbol:getRandomSymbol
};

const resultEl=document.querySelector(`#result`);
const lengthEL=document.querySelector(`#length`);
const uppercaseEL=document.querySelector(`#uppercase`);
const lowercaseEL=document.querySelector(`#lowercase`);
const numbersEL=document.querySelector(`#numbers`);
const symbolsEL=document.querySelector(`#symbols`);
const generateEL=document.querySelector(`#generate`);
const clipboardEL=document.querySelector(`#clipboard`);

// Generate Password function (function that accepts true/false values as well as a number as arguments)
function generatePassword(upper, lower, number, symbol, length){
    // Create password variable
    let generatedPassword=``;
    // Filter out unchecked types
    // True and false values can be added together.  (True is 1, false is 0)
    const typesCount=upper+lower+number+symbol;
    // If the user has not selected any of the four options, then display alert and return an empty string from the function.
    if (typesCount===0){
        alert("Please select at least one option.");
        return "";
    }
    let typesArr=[
        [`upper`, upper],
        [`lower`, lower],
        [`number`, number],
        [`symbol`, symbol]
    ];
    // The Filter method creates a new array with all the elements that pass the test implemented by the provided function
    typesArr=typesArr.filter(item=>{
        return item[1];
    });
    // Loop over the length, call the generator function for each checked type
    // Building password with a for loop
    
    // for(i=0;i<length;i+=typesCount){
    //     typesArr.forEach(type=>{
    //         const funcName=type[0];
    //         generatedPassword+=randomFunc[funcName]();
    //     });
    // }
    const randomArr=getRandomArray(typesArr, length);
    randomArr.forEach(type=>{
        const funcName=typesArr[type][0];
        generatedPassword+=randomFunc[funcName]();
    })

    // Add the final password to the password variable and return it from the function, after removing extraneous characters.
    return generatedPassword.slice(0,length);
}

// Event listener for when the "Generate Password" 
generateEL.addEventListener(`click`, ()=>{
    // Changing value from a string to a number
    const length=parseInt(lengthEL.value);
    // Checking if the following options/checkboxes are selected, setting the true/false values to variables.
    const hasUpper=uppercaseEL.checked;
    const hasLower=lowercaseEL.checked;
    const hasNumbers=numbersEL.checked;
    const hasSymbols=symbolsEL.checked;
    resultEl.innerText=generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
});

clipboardEL.addEventListener(`click`, ()=>{
    const textArea=document.createElement(`textarea`);
    const password=resultEl.innerText;
    // If user clicks clipboard while no password is displayed, the function will end and nothing will be coied to the clipboard.
    if(password===""){
        alert(`Please generate a password first`);
        return;
    }
    textArea.value=password;
    const body=document.querySelector(`body`);
    body.append(textArea);
    textArea.select();
    document.execCommand(`copy`);
    textArea.remove();
    alert(`Password has been copieed to the clipboard`);
});
