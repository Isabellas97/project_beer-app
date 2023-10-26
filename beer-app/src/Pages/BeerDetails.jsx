import { useParams, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import "./BeerDetails.css";

const BeerDetails = () => {
  const idParams = useParams();
  console.log(idParams.id);

  const [singleBeer, setSingleBeer] = useState();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${idParams.id}`)
      .then((res) => res.json())
      .then((daten) => setSingleBeer(daten))
      .catch((err) => console.log("Fetch funktioniert nicht"));
  }, []);

  console.log(singleBeer);

  return (
    <>
      {singleBeer ? (
        <div className="details">
          <img src={singleBeer.image_url} alt="Bier " />
          <h2>{singleBeer.name}</h2>
          <h3>{singleBeer.tagline}</h3>
          <h4>
            First brewed: <span>{singleBeer.first_brewed}</span>
          </h4>
          <h4>
            Attenuation level: <span>{singleBeer.attenuation_level}</span>
          </h4>
          <p>{singleBeer.description}</p>
          <Link to="/allbeers">⬅</Link>
        </div>
      ) : (
        <p className="loading"> hmmm... lecker Bier... </p>
      )}
      <Footer />
    </>
  );
};

export default BeerDetails;
