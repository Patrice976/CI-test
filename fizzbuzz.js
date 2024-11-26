export const fizzbuzz = (number) => {
    let data = ' '
    if (number % 3 == 0) {
        data = "Fizz"
      return data
    }
    if (number % 5 == 0) {
        data =+ "Buzz"
      return data
    }
    return number
  }
  
