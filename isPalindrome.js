function checkPalindrome (str) {
    for ( i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 'It is not a palindrome.'
        }
    }
return 'It is a palindrome';
}

let string = 'racecar'

console.log(checkPalindrome(string))

