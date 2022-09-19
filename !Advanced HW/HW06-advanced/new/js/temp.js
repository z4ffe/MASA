/* FOR THE PALINDROMES */

var palindromeText = document.querySelector('.the-palindrome')
var getPalindromeBtn = document.querySelector('.get-palindrome')
var isPalindromeBtn = document.querySelector('.is-palindrome')
var isPalindromeYesNo = document.querySelector('.yes-no')

/* FOR THE CLOCK */

var dateEl = document.querySelector('.date')
var timeEl = document.querySelector('.time')

/* FOR THE QUOTES */

var btnQuotes = document.querySelector('.get-quote')
var divQuotes = document.querySelector('.the-quote')

/* PALINDROMES */

function showPalindrome() {
    palindromeText.value = palindromes[getRandom(palindromes.length)]
}

function checkPalindrome() {

    var pal = palindromeText.value.replace(/[\s,\.!\-_;:\'’\"\?]/g,"").replace('ך','כ').replace('ם','מ').replace('ן','נ').replace('ף','פ').replace('ץ','צ').toLowerCase()
    
    console.log("pal: ",pal)
    console.log('pal.split("").reverse().join("" ): ',pal.split("").reverse().join("" ))

    if (pal.length === 0) isPalindromeYesNo.innerText = "Empty"
    else {
        if ( pal === pal.split("").reverse().join("" ) ) isPalindromeYesNo.innerText = "Yes!"
        else isPalindromeYesNo.innerText = "No:("
    }
}


/* CLOCK */

function getClock() {
    var dateTime = new Date()
    // Check setAMPM() and one-digit month
    dateTime = new Date(dateTime.getTime() + 2*60*60*1000)
    // dateTime = new Date(dateTime.getTime() + 2*30*24*60*60*1000)
    
    var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thirsday','Friday','Saturday']
    
    /* Example of passing reference to the object to the function
    var time = {}
    timeEl.innerText = setAMPM(dateTime.getHours(), time) + ":" + addZero(dateTime.getMinutes()) 
    + ":" + addZero(dateTime.getSeconds()) + " " + time.ampm */
    
    var ampm

    dateEl.innerText = weekDays[dateTime.getDay()] + " | " + dateTime.getDate() 
    + "/" + addZero(dateTime.getMonth()+1) + "/" + dateTime.getFullYear()
    
    timeEl.innerText = setAMPM(dateTime.getHours()) + ":" + addZero(dateTime.getMinutes()) 
    + ":" + addZero(dateTime.getSeconds()) + " " + ampm

    // JavaScript passes variables into functions BY VALUE (not BY REFERENCE),
    // so we cannot change variables of primitive datatypes
    // but ANYWAY object variables contain REFERENCE,
    // so we can change inside of the objects,
    // but not the reference itself
    function setAMPM(hour) {
        // Now SCOPE CHAIN includes the GLOBAL SCOPE
        //                          the SCOPE of getClock()
        //                      and the SCOPE of setAMPM()

        if ( hour < 12 ) {
            ampm = 'AM'
            return hour
        } else if ( hour === 12 ) {
            ampm = "PM"
            return hour
        }else {
            /* Example of passing reference to the object to the function
            timeToChange.ampm = "PM"*/
            ampm = "PM"
            return hour - 12
        }
    }

    // asynchronous function - waiting for some moment to be executed
    setTimeout(getClock,500)
}

function addZero(num) {
    if (num < 10) return "0"+num
    else return num
}

 

/* QUOTES */

function getQuote() {
    divQuotes.innerHTML = quotes[getRandom(quotes.length)]
}

/* Get Random Num */
// Gets random number from 0 to max - 1 (max = array length)
function getRandom(max) {
    return Math.floor(Math.random() * max)
}

/* All the Listeners */
getPalindromeBtn.addEventListener('click',showPalindrome)
isPalindromeBtn.addEventListener('click',checkPalindrome)
btnQuotes.addEventListener('click',getQuote)


window.onload = function() {
    getClock()
    showPalindrome()
}









