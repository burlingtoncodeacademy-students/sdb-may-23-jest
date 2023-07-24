let res = {
    name: "Paul",
    age: 27,
    career: "comedian"
}

let teamCaptain = ["Captain America", "Bucky", "Hawkeye"]

let sampleError = () => {
    throw new SyntaxError("Sample random error")
}

async function getData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await res.json()
    return data
}

function promiseSample() {
    const flag = true
    return new Promise((resolve, reject) => {
        flag ? resolve("Promise resolved yo") : reject("Promise rejected fool!")
    })
}

module.exports = { res, teamCaptain, sampleError, getData, promiseSample }
