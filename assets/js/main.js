class Input{
    constructor(nam,height,weight,imgSrc){
        this.nam = nam ;
        this.height = height ;
        this.weight = weight ;
        this.imgSrc = imgSrc ;
    }
}
let f = new Input('hisham',2,4,'hi');
let go = []
go.push(f);
console.log(go[0]) 
f = new Input('hisham',8,16,'hi');
go.push(f)
console.log(go)

let allPokemon = []
let randomPokemon = []
let card = {};
for (i = 0; i <= 180; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {
     
        allPokemon.push(new Input(String(data.name),Number(data.height),Number(data.weight),String(data.sprites.other.dream_world.front_default)))
         
    })
   
    
}

allPokemon.sort(() => .5 - Math.random())
console.log(allPokemon)
console.log(allPokemon.length)
for ( j = 0 ; j < 20 ; j++ ){
    randomPokemon.push(allPokemon[j])
}

console.log(randomPokemon)