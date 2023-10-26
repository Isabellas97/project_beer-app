import regal from "../assets/img/Home1.jpeg";
import bier from "../assets/img/home2.jpeg";
import { Link, NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <section>
      <div>
        <img src={regal} alt="Bierregal" />
        <div className="OrangeBG">
          <Link to="/allbeers">All Beers</Link>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere
          suscipit id autem. Numquam!
        </p>
      </div>
      <div>
        <img src={bier} alt="Bier" />
        <div className="OrangeBG">
          <Link to="/random">Random Beer</Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere
          suscipit id autem. Numquam!
        </p>
      </div>
    </section>
  );
};

export default Home;
