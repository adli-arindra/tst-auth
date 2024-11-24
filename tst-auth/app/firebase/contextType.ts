import { User } from "firebase/auth"

type ContextType = {
    user: User
    setUser: React.Dispatch<User>, 
}


export type { User, ContextType }