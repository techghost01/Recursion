function isPalindrome(word) {
    // Define a helper function to recursively check if a substring is a palindrome
    function isSubstringPalindrome(start, end) {
      // Base case: when start index and end index cross each other, the substring must be a palindrome
     
      if (start >= end) {
        return true;
      }

      
      // Recursive case: compare characters at both ends of the substring
      if (word[start] === word[end]) {
        return isSubstringPalindrome(start + 1, end - 1);
      } else {
        return false;
      }
    }

    // Handle edge cases
    if (!word || word.length === 0) {
      return true;
    }

    // Call the helper function to check if the entire word is a palindrome
    return isSubstringPalindrome(0, word.length - 1);
  }

  console.log(isPalindrome("radar")); // Output: true
  console.log(isPalindrome("banana")); // Output: false.