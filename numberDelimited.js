function numberDelimited(x, delimiter, jumps) {
    var regex = new RegExp(/\B(?=(\d{3})+(?!\d))/g); //fixed to 3 :((
    return x.toString().replace(regex, delimiter);
}

//numberDelimited(x, ',', 3)
