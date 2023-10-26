// Problem : Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

import java.util.HashMap;

public class Problem_2 {
    public static void main(String[] args) {
     
        String roman = "XVIII";
        System.out.println("Integer is " + getInteger(roman));

    }

    static int  getInteger(String roman){
        int num = 0;    
        if (roman == null || roman.length() == 0) {
            return 0;
        }

        // Create a hashmap to store the values of roman num
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int prevValue = 0; // To keep track of the prev value

        // Iterate through the roman num string from right to left
        for (int i = roman.length() - 1; i >= 0; i--) {
            char currentChar = roman.charAt(i);
            int currentValue = romanValues.get(currentChar);

            // If the current value is smaller than the previous value , subtract it
            if (currentValue < prevValue) {
                num -= currentValue;
            } else {
                num += currentValue;
            }
            prevValue = currentValue;
        }
       return num; 
    }
}
