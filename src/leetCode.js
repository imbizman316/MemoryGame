const leetCode = (sum, nums, temp={}) => {

  if (sum in temp) return temp[sum];
  if (sum === 0) return true;
  if (sum < 0) return false;

  for (const num of nums) {

    const newNum = sum - num;
    if (leetCode(newNum, nums, temp) === true) {
      temp[sum] = true;
      return true
    }

  }

  temp[sum] = false;
  return false

}


console.log(leetCode(300, [7,14]));