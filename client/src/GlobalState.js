import React, {createContext, useState} from 'react'
import PakagesAPI from './api/PakagesAPI'
import SellpackAPI from './api/SellpackAPI'
import CategoriesAPI from './api/CategoriesAPI'



export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)

  

    
    const state = {
       token: [token, setToken],
        pakagesAPI: PakagesAPI(),
        sellpackAPI: SellpackAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}

