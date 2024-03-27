//Tipo
type Hero = {
    name: string
    age: number
}
//Objeto
let hero: Hero = {
    name: "Thor",
    age: 1500
};
//Funcion Utilizando los datos de dicho objeto enfocado en Tipo
function createHero(hero: Hero) :Hero {
    const { name, age} = hero
    return {name, age}
}