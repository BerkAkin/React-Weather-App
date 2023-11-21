import { createContext,useState,useEffect } from "react";
import axios from "axios";
const Sehir = createContext({});

export const SehirProvider =  ({children}) => {

const [city,setCity] = useState('istanbul')
const [data,setData] = useState()
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
useEffect(()=>{

    const fetchData = async ()=>{
    await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=tr`)
    .then((hava)=>setData(hava.data))
    .catch((err)=>console.log(err))
    }

     fetchData()

},[city])

const values= {city,setCity,data}

    return(
        <Sehir.Provider value={values}>
            {children}
        </Sehir.Provider>
    )
}

export default Sehir;