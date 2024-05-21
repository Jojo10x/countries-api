import { useState } from "react"
import Search from "../components/Search"
import Region from "../components/Region"
import Card, { HomeCards } from "../components/Card"

const Home = () => {

  const [search, setSearch] = useState("")
  const [region, setRegion] = useState(HomeCards)

  const searchCountry = (e) => {
    const foundCountry = HomeCards.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
    setRegion(e.target.value === "" ? HomeCards : foundCountry)
    setSearch(e.target.value)
  }

  const regionFilter = (e) => {
    setRegion(e.target.value === "All" ? HomeCards : HomeCards.filter(country => country.region === e.target.value))
  }

  return (
    <main>
      <div className="bars">
        <Search searchCountry={searchCountry}/>
        <Region regionFilter={regionFilter}/>
      </div>
      <div className="cards-grid">
        {region.map((country) => (
          <Card country={country} key={country.alpha3Code} />
        ))}
      </div>
    </main>
  )
}

export default Home

