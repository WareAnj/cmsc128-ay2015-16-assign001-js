function numToWords(num){
    //index == the word equivalent
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    console.log(convert(num));

     function convert(num){
         if (num==0) return 'zero';
         else return convertMillions(num);
     }
     
      function convertMillions(num){
        if(num>=1000000){
          return convertMillions(Math.floor(num/1000000)) + " million " + convertThousands(num%1000000);
        }
        else return convertThousands(num);
      }

      function convertThousands(num){
        if(num>=1000){
          return convertThousands(Math.floor(num/1000)) + " thousand " + convertHundreds(num%1000);
        }
        else return convertHundreds(num);
      }

      function convertHundreds(num){
        if(num>99){
          return ones[Math.floor(num/100)] + " hundred " + convertTens(num%100);
        }
        else return convertTens(num);
      }

      function convertTens(num){
            if(num<10) return ones[num];
            else if (num>=10 && num<20) return teens[num-10];
            else{
                return tens[Math.floor(num/10)] + " " + ones[num%10];
            }
        }
}
