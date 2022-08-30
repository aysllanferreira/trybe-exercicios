let RepeatMode = () => {
  let nums = [2, 3, 2, 5, 8, 2, 3];
  let count;
  let last = 0;
  let number;
  for (let i = 0; i < nums.length; i++) {
    for (let ind = 0; ind < nums.length; ind++) {
      if (nums[i] === nums[ind]) {
        count += 1;
      }
    }
    if (count > last) {
      number = nums[i];
      last = count;
    }
    count = 0;
  }
  console.log(number);
};
RepeatMode();
