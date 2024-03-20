const fibsRec = (num) => {
  let arr = [0, 1];

  if (num === 0) {
    return [];
  }
  if (num === 1) {
    return [arr[0]];
  }

  if (num === 2) {
    return arr;
  }

  let recursionResponse = fibsRec(num - 1);
  recursionResponse.push(
    recursionResponse[recursionResponse.length - 1] +
      recursionResponse[recursionResponse.length - 2]
  );
  return recursionResponse;
};

export default fibsRec;
