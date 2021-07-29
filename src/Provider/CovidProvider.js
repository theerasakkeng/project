import React,{useState,useEffect,createContext} from 'react'
export const CovidContext = createContext();
export const CovidProvider = ({children}) => {
    const [covid, setCovid] = useState([]);
    const covidURL = "https://corona.lmao.ninja/v2/countries?sort=country"
    const covidData = async () => {
        const response = await fetch(covidURL);
        const covidInformation = await response.json();
        setCovid(covidInformation);
    }
    useEffect(() => {
        covidData();
    },[]);
    return(
        <CovidContext.Provider value={[covid,setCovid]}>
            {children}
        </CovidContext.Provider>
    )
}