// Problem : Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it. 

import java.util.Arrays;
import java.util.Random;

public class Problem_1{
    public static void main(String[] args) {
        // base array
        int[] arr = {1,2,33,4,5,6,7};
        
        // approach 1 (without altering base array time comp --> O(n * k) k depends on random object
        shuffleOne(arr);
        // approach 1 (with altering )
        shuffleTwo(arr);
    }

    static void shuffleOne(int[] arr) {
         // new Random object
         Random random = new Random();
         // new arr 
         int[] newArr = new int[arr.length];
        //   get every index of base array --> get random index with "random" obj -->
        // --> check if the position is already filled --> store num in new arr with shuffled index
         
         for (int i = 0; i < arr.length; i++) {
            int randomNum = random.nextInt(0,arr.length);
            while(newArr[randomNum] != 0){
                randomNum = random.nextInt(0,arr.length);
            }
            newArr[randomNum] = arr[i];
         }
   
        System.out.println(Arrays.toString(newArr));
    }

    
     static void shuffleTwo(int[] arr) {
          Random random = new Random();
          //  getting random index and swapping it with every element 
          for (int i = 0; i < arr.length; i++) {
                int randomNum = random.nextInt(0 , arr.length);
                int temp = arr[i];
                arr[i] = arr[randomNum];
                arr[randomNum] = temp;
          }
          System.out.println(Arrays.toString(arr));
    }
}