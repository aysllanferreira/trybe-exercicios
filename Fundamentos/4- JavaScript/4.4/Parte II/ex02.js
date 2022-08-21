let greatIndex = () => {
  let nums = [2, 13, 6, 7, 10, 1];
  let great = Number.NEGATIVE_INFINITY;
  let c = Number.NEGATIVE_INFINITY;

  for (i = 0; i < nums.length; i++) {
    if (c === great) {
      great = nums[i];
    }

    if (nums[i] > great) {
      great = nums[i];
    }
  }
  let indexGreat = nums.indexOf(great);
  console.log(indexGreat);
};

greatIndex();
