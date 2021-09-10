class Input{
    constructor(nam,height,weight,imgSrc){
        this.nam = nam ;
        this.height = height ;
        this.weight = weight ;
        this.imgSrc = imgSrc ;
    }
}
let a = "obj"
var allPokemon = []
let allPokemon1 = []
let randomPokemon = []

for (i = 2; i <= 100; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {
        
        window[a+i] = new Input(data.name,data.height,data.weight,data.sprites.other.dream_world.front_default)
        allPokemon.push[window[a+i]]
    })
   
    
}
allPokemon1 = allPokemon
console.log(allPokemon1)
allPokemon.sort(() => .5 - Math.random())

console.log(allPokemon)

console.log(allPokemon.length)
for ( j = 0 ; j < 20 ; j++ ){
    randomPokemon.push(allPokemon[j])
}

console.log(randomPokemon)