function splitUserID(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        // for even ID
        even.push(numbers[i]);
      } else {
        // for not even ID (odd ID)
        odd.push(numbers[i]);
      }
    }
    // object with  oddID and evenID array in it
    const returnObject = {
        odd,
        even,
      };
    
      return returnObject;
  }