//Types
type UserId = `${string}-${string}-${string}-${string}-${string}`

type UserType = "Client" | "Employee" | "Administrator" //Union Type


type UserBasicInfo ={
    name: string //type string
    age: number //type number
}
 
type UserProperties = {
    readonly id? : string //Read-Only variable
    isUserActive?: boolean //type boolean, optional
    usertype?: UserType
    address?:{
        country:string,
        city:string
    }
}

type User =UserBasicInfo & UserProperties


//Object
let user: User = {
    name: "Joel",
    age: 19,
};
//Function using the object
function createUser(user: UserBasicInfo) :User {
    const { name, age} = user
    return {id: crypto.randomUUID(),
        name, 
        age, 
        isUserActive: true,
} //Id will be a random set of characters composed by five randoms strings
        

}

const User1 = createUser({name: "Joel", age:19,}) //Remaking user with all created variables
User1.usertype = "Employee"


const User1address : UserProperties["address"] ={ //Type Indexing
    country: "Dominican Republic",
    city: "Santo Domingo"
}

const User2 = createUser({name: "Mike", age:30,})
User2.usertype = "Client"

const User2address : UserProperties["address"] ={
    country: "United States",
    city: "San Francisco"
}

const User3 = createUser({name: "Josh", age:42,})
User3.usertype = "Administrator"

const User3address : UserProperties["address"] ={
    country: "Dominican Republic",
    city: "Azua"
}

//Array

const userNames: string[] = []
userNames.push[User1.name]
userNames.push[User2.name]
userNames.push[User3.name]
