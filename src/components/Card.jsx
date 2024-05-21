import { Link } from "react-router-dom"
import data from "../assets/data.json"
import "./Card.css"

export const HomeCards = data.map((country) => {
    const { name, population, region, capital, flags, alpha3Code } = country
    return {
        name,
        population,
        region,
        capital,
        flags,
        alpha3Code
    }
})

const Card = ({ country }) => {

    country.capital == undefined ? country.capital = "-" : country.capital

    return (
        <div className="card">
            <div className="card-flag-container">
                <Link to={country.alpha3Code}><img className="card-flag" src={country.flags.svg} alt="Country flag" /></Link>
            </div>
            <div className="card-info">
                <h2>{country.name}</h2>
                <p>Population: <span>{country.population.toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>  
            </div>
        </div>
    )
}

export default Card