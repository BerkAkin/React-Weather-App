import { createContext,useState } from "react";

const Sehir = createContext();

export const SehirProvider = ({children}) => {

const [city,setCity] = useState('istanbul')

const values= {
    city,
    setCity,
}
    return(
        <Sehir.Provider value={values}>
            {children}
        </Sehir.Provider>
    )
}

export default Sehir;