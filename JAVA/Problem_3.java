
// Problem : Check if the input is pangram or not.

import java.util.HashSet;
import java.util.Scanner;

public class Problem_3 {
    public static void main(String[] args) {
        // Getting input
        System.out.println("Enter a sentence: ");
        Scanner input = new Scanner(System.in);
        String sentence = input.next();

        // Approch one (using hashset)
        isPangram1(sentence);

        // Approach 2
        isPangram2(sentence);



    }
    private static void isPangram1(String sentence) {

        if(sentence.length()<26) System.out.println(false);
        // creating hashset for storing unique chars
        // As hashset only stores unique elements
        HashSet<Character> uniqueChars = new HashSet<>();
           for (int i = 0; i < sentence.length(); i++) {
            uniqueChars.add(sentence.charAt(i));
        }
    // if hashset size is 26 then sentence is pangram;
        System.out.println(uniqueChars.size() == 26);
    }

    private static void isPangram2(String sentence) {
         
        if(sentence.length()<26) System.out.println(false);
        // mapping a to z with according to ASCII values 
        // checking instance of every char from a to z
        // if not found return/print false 
           for (int i = 1; i <= 26; i++){
            if(sentence.indexOf((char)i+96)<0){
                  System.out.println(false);
            }
        }       
        System.out.println(true);
    }

}
