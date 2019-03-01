const cumsum = (array) => {
  const new_array = [];
  array.reduce( (runningSum, term, index) => {
    new_array[index] = runningSum + term;
    return new_array[index];
  }, 0);
  return new_array;
}

const getPositiveRate = (array) => {
  const total = array.reduce((a,b) => a+b);
  const cumulative = [0].concat(cumsum(array));
  return cumulative.map( doesCount => (total - doesCount)/total );
}

const truePositiveRate = (array) => getPositiveRate(array);
const falsePositiveRate = (array) => {
  return getPositiveRate(array.map(x => !x));
}

export {cumsum, truePositiveRate, falsePositiveRate};
