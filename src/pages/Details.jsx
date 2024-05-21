import { Link } from 'react-router-dom'
import DetailCard from "../components/DetailCard"
import "./Details.css"

const Details = ({ country }) => {

  return (
    <div className="details">
      <Link to="/" className="back-link">
        <button className="back-btn"><i className="fa-solid fa-arrow-left-long"></i> Back</button>
      </Link>
      <DetailCard country={country} />
    </div>
  )
}

export default Details