const addNums = require("./sum")

test("Adds 5 & 7 to be 12", () => {
    expect(addNums(5, 7)).toBe(12)
})

test("Floating point addition", () => {
    expect(addNums(0.1, 0.2)).toBeCloseTo(0.3)
})