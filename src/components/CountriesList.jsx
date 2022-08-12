import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function CountriesList() {

    // 1. SE CREA EL ESTADO PARA ALMACENAR LA INFO
    const [countries, setCountries] = useState([])
    const [isFetching, setIsFetching] = useState(true)


    // 2. useEffect PARA PEDIRLE INFO A LA API
    useEffect(()=> {
        getCountries()

    },[])
    // 3. FUNCION AXIOS/ FETCH PARA TRAER INFO DE UNA API (URL) se crea una funcion async
    const getCountries = async () => {

        const response = await axios("https://ih-countries-api.herokuapp.com/countries")
        setCountries(response.data)
        setIsFetching(false)
    }

    // 4. MANEJO DE SECCION DE ...LOADING

    if (isFetching === true) {
        // si el componente está buscando data
        return <h3>... Loading</h3>
      }

     
  return (
    <div>
     {/* 5. RENDERIZAR LA DATA  (.map ) */}
     {countries.map((eachCountries)=> {
        
        return (

            <li> 
                <Link  to={`/countries-details/${eachCountries.alpha3Code}`}>{eachCountries.name.common}</Link>
            </li>
        )
     } )}

    </div>
  )
}

export default CountriesList