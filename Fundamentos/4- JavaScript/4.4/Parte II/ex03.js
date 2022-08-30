let minorIndex = () => {
  let nums = [2, 4, 6, 7, 10, 0, -3];
  let minor = Number.POSITIVE_INFINITY;
  let c = Number.POSITIVE_INFINITY;

  for (i = 0; i < nums.length; i++) {
    if (c === minor) {
      minor = nums[i];
    }

    if (nums[i] < minor) {
      minor = nums[i];
    }
  }
  let indexGreat = nums.indexOf(minor);
  console.log(indexGreat);
};

minorIndex();
