import { createContext, useState } from "react";


export const UserContext = createContext()


export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // console.log(JSON.stringify(user))
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

