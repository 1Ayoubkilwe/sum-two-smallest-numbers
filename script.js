// Good Luck 💪🏾
function sumTwoSmallestNums(arr) {
  
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
  }
  

  console.log(sumTwoSmallestNums([12, 5, 24, 55, 18])); // 17
  console.log(sumTwoSmallestNums([190, 300, 230, 800])); // 420
  