function wordsToNum(num){
    //equivalent words for numbers with small value
    var small = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90
    };

    //equivalent value for titles
    var title = {
        'thousand':     1000,
        'million':      1000000,
    };

    return convert(num); //function call

    var convertedNum,
        x,
        y;

     function convert(num){
         convertedNum = num.toString().split(/[\s]+/);
         x = 0;
         y = 0;
         convertedNum.forEach(individualConversion);
         return x + y;
     }

     function individualConversion(word){
        var num = small[word]; //assigning equivalent number from the passed word
        if(num != null){
             y = y + num ;      //updating y (for small numbers)
        }
        else if(word == "hundred" && y!=0) {
            y = y * 100;    //if it is a hundred
        }
        else{
            num = title[word];
            if (num != null) {
                x = x + y * num;  //storing to x if number is in thousands
                y = 0;
            }
            else {
                return console.log("Invalid input");
            }
        }
     }
}

//algo derived from: https://github.com/ghewgill/text2num/blob/master/text2num.py
