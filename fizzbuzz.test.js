import {fizzbuzz} from "./fizzbuzz.js"

test("check if multiple of 3 return Fizz ", () => {
    expect(fizzbuzz(3)).toBe("Fizz")
})

test("check if multiple of 5 return Buzz ", () => {
    expect(fizzbuzz(5)).toBe("Buzz")
})

test("check if multiple of 5 and 3 return FizzBuzz ", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
})

test("check if neither multiple of 5 or 3 return number ", () => {
    expect(fizzbuzz(7)).toBe(7)
})