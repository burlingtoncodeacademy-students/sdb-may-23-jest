const { res, teamCaptain, sampleError, getData, promiseSample } = require("./app")

test("Property value check", () => {
    expect(res).toEqual({ name: "Paul", age: 27, career: "comedian" })
})

test("Single property value check", () => {
    expect(res.name).toEqual("Paul")
})

test("Check if Captain exists", () => {
    expect(teamCaptain).toContain("Captain America")
})

test("Check if fx throws an error", () => {
    expect(() => sampleError()).toThrow("Sample random error")
})

test("Check if we get data from API", async () => {
    const data = await getData()
    expect(Object.keys(data).length).not.toBe(0)
})

test("Check if pokemon is pikachu", async () => {
    const data = await getData()
    expect(data.name).toContain("pikachu")
})

test("Check if promise resolves", async () => {
    const data = await promiseSample()
    expect(data).toBe("Promise resolved yo")
})