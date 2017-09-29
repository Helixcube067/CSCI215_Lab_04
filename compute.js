

// -----------------------------------
// Global Variables Go Here
var pound = 'http://munsellb.people.cofc.edu/img/pound.jpeg'
var euro = 'http://munsellb.people.cofc.edu/img/euro.jpeg'
var kroon = 'http://munsellb.people.cofc.edu/img/kroon.jpeg'
var canadian = 'http://munsellb.people.cofc.edu/img/canadian.jpeg'
var yuan = 'http://munsellb.people.cofc.edu/img/yuan.jpeg'
var I = [pound, euro, kroon, canadian, yuan]


// -----------------------------------
// Convert Function Goes Here
function convert(){
    var dollar = document.getElementsByName("dollars")[0].value;
    var selectElement = document.getElementById('currency');
    var exchangeRate = selectElement.value;
    var index = selectElement.selectedIndex;
    var currency = selectElement.options[index].text;
    updateExchange(dollar, exchangeRate, currency, index);
}


// -----------------------------------
// Calculate Function Goes Here
function calculate(dollar, exchangeRate){
    return dollar * exchangeRate;
}

// -----------------------------------
// Functions that are given
// Do not modify

function updateImage( index ) { 
    
    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;
    
}

function updateExchange( dollar, exchangeRate, currency, index ) {
    
    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;
    
    updateImage( index );
    
}
