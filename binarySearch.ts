function binarySearch(list: number[], item: number): number {

    let middle;
    let guess;
    let low = 0;
    let high = list.length - 1;
  
  
    while(low <= high) {
      middle = Math.floor((high + low) / 2);
      guess = list[middle];
  
      if (guess === item) {
        return middle;
      }
      if (guess > item) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }
  
      return -1;
  }
  
  const list = [1,4,5,6,20,50,80];
  const numero = 80;

  const res = binarySearch(list, numero);

  console.log(res)