/* 
  Write a JavaScript program to find the most frequent item of an array

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/


function mostFrequent(arr) {
    
    let maxf =-1;
    let count;
    let maxCount;

    for (let i = 0; i < arr.length; i++)
    {
        count = 0;
        for (let j = 0; j < arr.length; j++)
        {
            if (arr[i] == arr[j]) {
                count+=1;
            }
        }
        if (count > maxf) {
            maxf = arr[i];
            maxCount = count;
        }
    }
    return { maxf, maxCount };
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(mostFrequent(arr));