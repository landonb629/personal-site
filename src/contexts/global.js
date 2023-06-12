import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router";

const GlobalContext = createContext()
export const useAppContext = () => useContext(GlobalContext)

const AppContext = ({children}) => { 
    const {id} = useParams()
    const [page, setPage] = useState()
    return(
        <GlobalContext.Provider value={{page, setPage}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext