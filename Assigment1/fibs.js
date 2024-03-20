const fibs = (num) => {

  const arr = [0, 1];
  if(num === 0){
   return []
  }else if(num === 1){
   return [0]
  }else if(num === 2){
   return arr;
  }
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

export default fibs;
