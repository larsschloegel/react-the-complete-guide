const musicGenres = ["Rock", "Pop"]

const newMusicGenres = ["Metal"]

const twoArrays = [musicGenres, newMusicGenres]
console.log(twoArrays)
/*
... pulls values
 */
const oneArraywithAllValues = [...musicGenres, ...newMusicGenres]
console.log(oneArraywithAllValues)

const animal1 = {
    name: "cat",
}

const animal2 = {
    name: "lion"
}

/*
be careful. key name should be different. override cat with lion
 */
const superFamily = {
    test: "feloidea",
    ...animal1,
    ...animal2
}
console.log(superFamily)