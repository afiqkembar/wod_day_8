var isPalindrome = function(product) {
    var palindromeCheck = true;
    for (var i = 0; i < product.length / 2; i++) {
        if (product[i] != product[product.length - i - 1])
            palindromeCheck = false;
    }
    document.write( palindromeCheck);

};
