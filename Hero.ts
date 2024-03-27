//Types
type UserId = `${string}-${string}-${string}-${string}-${string}`

type User = {
    readonly id? : string //Read-Only variable
    name: string //type string
    age: number //type number
    isUserActive?: boolean //type boolean, optional
}
//Object
let user: User = {
    name: "Joel",
    age: 19
};
//Function using the object
function createUser(user: User) :User {
    const { name, age} = user
    return {id: crypto.randomUUID(),
        name, 
        age, 
        isUserActive: true} //Id will be a random set of characters composed by five randoms strings
}