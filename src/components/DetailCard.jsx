import { Link, useParams } from "react-router-dom"
import data from "../assets/data.json"
import "./DetailCard.css"

const DetailCards = data.map((country) => {
    const { name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, flags, alpha3Code, borders, numericCode } = country
    return {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      flags,
      alpha3Code,
      borders,
      numericCode
    }
})

const CountryDetails = () => {

    const { id } = useParams()

    const getCountry = DetailCards.filter(country => country.alpha3Code === id)[0]
    
    const getBorders = getCountry.borders == undefined ? getCountry.borders = [] : getCountry.borders 

    const getBorderNames = getBorders == [] ? getBorders : getBorders.map((border) => {
        return DetailCards.filter(country => country.alpha3Code.includes(border))[0].name
    }) 

    getCountry.capital == undefined ? getCountry.capital = "-" : getCountry.capital

    getCountry.currencies == undefined ? getCountry.currencies = [] : getCountry.currencies

    const getLanguages = getCountry.languages.map(country => country.name)

    return (
        <div className="details-container">
            <div className="details-flag-container">
                <img className="details-flag" src={getCountry.flags.svg} alt={`${getCountry.name} flag`} />
            </div>
            <div className="details-info">
                <h2 className="details-title">{getCountry.name}</h2>
                <div className="grid">
                    <div className="grid-column">
                        <p>Native Name: <span>{getCountry.nativeName}</span></p>
                        <p>Population: <span>{getCountry.population.toLocaleString()}</span></p>
                        <p>Region: <span>{getCountry.region}</span></p>
                        <p>Sub Region: <span>{getCountry.subregion}</span></p>
                        <p>Capital: <span>{getCountry.capital}</span></p>
                    </div>
                    <div className="grid-column">
                        <p>Top Level Domain: <span>{getCountry.topLevelDomain}</span></p>
                        {getCountry.currencies.length != 0 && <p>Currencies: <span>{getCountry.currencies[0].name}</span></p>}
                        <p>Languages: <span>{getLanguages.join(", ")}</span></p>
                    </div>  
                </div>
                <div className="borders">
                    {getBorders.length != 0 && <p className="borders-list">Border Countries: </p>}
                    {getBorders.map((border, index) => (
                        <Link border={border} key={index} to={`/${getBorders[index]}`} className="borders-country">{getBorderNames[index]}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CountryDetails