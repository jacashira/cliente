import { createContext, useState, } from 'react'

export const initializeLocalStorage = () => {
    
}

export const FrontendContext = createContext()


export const FrontendProvider = ({children}) => {

    const [prefixApi] = useState('http://localhost:3000/apirest/v1/')

    return(
        <FrontendContext.Provider value={{
            prefixApi,
        }}>
            {children}
        </FrontendContext.Provider>
    )
}