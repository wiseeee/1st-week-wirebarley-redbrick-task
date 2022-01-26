export function exchange(data, input, target) {
  const exchageRate = data['USD' + target];
  const output = (exchageRate * input).toFixed(2);
  return output.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}