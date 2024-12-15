import React from "react";
import { useEffect, useState } from "react";

function CountriesCard ({name,flag}) {
   // console.log(flag)
    return(
        <div
        style={{
            border:'1px solid gray',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            width:'250px',
            height:'250px',
            padding:'10px',
            textAlign:'center',

        }}
        >
            <img src={flag} alt={flag} style={{height:'100px', width:'100px'}}/>
            <h2>{name}</h2>
        </div>
    );
}
const Countries = () => {
    const API_URL = 'https://xcountries-backend.azurewebsites.net/all';
    const [countries , setCountries] =  useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error fetching data:", error));
    },[]);
    return(
        <div
        style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'10px'

        }}
        >
            {countries.map((country)=>(
                <CountriesCard name={country.name} flag={country.flag} key={country.abbr} />
            ))}
        </div>
    )
}
export default Countries;