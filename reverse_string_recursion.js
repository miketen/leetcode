/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    
    
    var string = "";
    
    
    function helper(str, index) {
        if (str.length == 0) {
            return;
        }
    
        
        string += str.charAt(index);
        
        helper(str.substring(0, index), index-1);
        
        
    }
    
    
    helper(s, s.length-1);
    
    return string;
    
};



console.log(reverseString("hello"));