//Tipo
type User = {
    name: string //tipo string
    age: number //tipo number
    isUserActive?: boolean //tipo boolean, opcional
}
//Objeto
let user: User = {
    name: "Joel",
    age: 19
};
//Funcion Utilizando los datos de dicho objeto enfocado en Tipo
function createUser(user: User) :User {
    const { name, age} = user
    return {name, age}
}