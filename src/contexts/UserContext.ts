import { createContext } from "react";
import { User } from "../types/user";

type UserContextType = {
    user:{name:string},
    toggleLogin:() => void;
}
export default createContext<UserContextType>({} as UserContextType)