function wordsToCurrency(num, inputCurrency){
    //array containing the valid titles
    var currencies = ['JPY', 'PHP', 'USD'];
        //function for checking if input is in array
        if(!Array.prototype.contains) {
            Array.prototype.contains = function(k) {
                for(var i=0; i < this.length; i++){
                    if(this[i] === k){
                        return true;
                    }
                }
                return false;
            }
        }
        //checking if the input is in the array
        if(currencies.contains(inputCurrency)){
            return console.log(wordsToNum(num) + " " + inputCurrency);
        }
        else{
            return console.log('Invalid title');
        }
}
