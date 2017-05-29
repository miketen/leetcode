/**
 * @param {string} s
 * @return {string}
 */
 
 /*

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.

 */
var longestPalindrome = function(s) {
    var start = 0;
    var end = s.length - 1;
    
    var string = "";
    
    
    while (start < s.length && end > 0 && start < end) {
        
        var letterOne = s[start];
        var letterTwo = s[end];
        
        
        if (letterOne === letterTwo) {
            string+= letterOne;
        }
        
        start++;
        end--;
        
        
    }
    
    return string;
    
    
   
    
    
};