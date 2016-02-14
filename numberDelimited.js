function numberDelimited(num, delimiter, jump) {

    //Function from http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript/14428340#14428340
    Number.prototype.format = function(n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    };//end

    var number = num.format(0, jump); //calling the function above 0 as the decimal places and jump as the count of digits
    number.toString(); //changing it to string to be able to replace the comma
    return number.replace(/,/g, delimiter); //changing commas with the given delimiter
}

//numberDelimited(x, ',', 3)
