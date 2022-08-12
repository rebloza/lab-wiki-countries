
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'


function CountryDetails() {

    const { countries } = useParams()

    // 1. SE CREA EL ESTADO PARA ALMACENAR LA INFO
     const [countriesDetails, setCountriesDetails] = useState(null)
     const [isFetching, setIsFetching] = useState(true)
    


    // 2. useEffect PARA PEDIRLE INFO A LA API
    useEffect(()=> {

       getCountriesDetails()

    }, [countries])
   
    // 3. FUNCION AXIOS/ FETCH PARA TRAER INFO DE UNA API (URL) se crea una funcion async

    const getCountriesDetails = async () => {
        const response = await axios(`https://ih-countries-api.herokuapp.com/countries/${countries}`)
        setCountriesDetails(response.data)
        setIsFetching(false)
    }
   

    // 4. MANEJO DE SECCION DE ...LOADING

    if (isFetching === true) {
        // si el componente está buscando data
        return <h3>... Loading</h3>
      }




  return (
    <div>
        <p>{countriesDetails.name.common}</p>
        <p>{countriesDetails.capital}</p>
        <p>{countriesDetails.area}</p>
           
           {countriesDetails.borders.map((eachBorder) => {
            return (
                <li>
                    {eachBorder}
                </li>
            )
           })}
    </div>
  )
}

export default CountryDetails