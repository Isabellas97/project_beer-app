import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import "./AllBeers.css";

const AllBeers = () => {
  const [beer, setBeer] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeer(data))
      .catch((error) => console.error("Fetch funktioniert nicht", error));
  }, []);

  console.log(beer);

  return (
    <>
      <article>
        {beer?.map((item, index) => (
          <div key={index} className="beerfetch">
            <img src={item.image_url} alt="Bild vom Bier" />

            <div className="description">
              <h2>{item.name}</h2>
              <h3>{item.tagline}</h3>
              <p>Created by: {item.name}</p>

              {/* ! Link zu den gefetchten Details */}
              <Link to={`/allbeers/${item._id}`}>Details</Link>
            </div>
          </div>
        ))}
      </article>
      <Footer />
    </>
  );
};

export default AllBeers;
