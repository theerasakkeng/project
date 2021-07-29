import React,{useState,useEffect} from 'react'
import { CovidContext } from '../Provider/CovidProvider'

export default function Dashboard() {
    const [data, setData] = useState([]);
    const api = "https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR1mWA6t2BUx5sZnQg67orUs5tq-tivACagctyIAYyvaBkdxd6F4GFS4kCk"
    
    const CovidThailand = async () =>{
        const response = await fetch(api);
        const dataCovid = await response.json();
        setData(dataCovid)
    }
    useEffect(() => {
        CovidThailand();
    },[]);

    console.log(data)
   
    return (
        <div>
           <p></p>
        </div>
    )
}
