import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"xyz",
        email:"xyz@gmail.com"
    }
})

UserContext.displayName = "UserContext"

export default UserContext