import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [counts, setCounts] = useState({
    properties: 0,
    cities: 0,
    customers: 0,
    owners: 0
  });

  const [stars, setStars] = useState([]);

  const [rentShake, setRentShake] = useState(false);
  const [buyShake, setBuyShake] = useState(false);
  const [sellShake, setSellShake] = useState(false);


  useEffect(() => {

    const target = {
      properties: 50000,
      cities: 100,
      customers: 25000,
      owners: 10000
    };

    const duration = 1800;
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;

    const interval = setInterval(() => {

      step++;

      const progress = step / steps;

      setCounts({
        properties: Math.floor(target.properties * progress),
        cities: Math.floor(target.cities * progress),
        customers: Math.floor(target.customers * progress),
        owners: Math.floor(target.owners * progress)
      });

      if (step >= steps) {
        clearInterval(interval);

        setCounts(target);
      }

    }, intervalTime);

    return () => clearInterval(interval);

  }, []);


  const handleStar = (event) => {

    const star = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY
    };

    setStars((oldStars) => [...oldStars, star]);

    setTimeout(() => {
      setStars((oldStars) =>
        oldStars.filter((item) => item.id !== star.id)
      );
    }, 1000);
  };


  return (
    <div id="mainPage" onClick={handleStar}>

      {/* NAVBAR */}

      <nav id="navbar">

        <div id="logo">
          Property<span>India</span>
        </div>

        <div id="navLinks">

          <a id="buyLink" href="#searchBox">
            Buy
          </a>

          <a id="rentLink" href="#searchBox">
            Rent
          </a>

          <a id="sellLink" href="#searchBox">
            Sell
          </a>

          <a id="propertyLink" href="#lookingSection">
            Properties
          </a>

        </div>

        <div id="navButtons">

          <button id="loginButton">
            Login
          </button>

          <button id="postButton">
            Post Property
          </button>

        </div>

      </nav>


      {/* HERO SECTION */}

      <section id="heroSection">

        <div id="heroContent">

          <p id="heroSmallText">
            INDIA'S SMART PROPERTY PLATFORM
          </p>

          <h1 id="heroHeading">
            Find Your
            <span id="heroHeadingSpan">
              Perfect Property
            </span>
          </h1>

          <p id="heroDescription">
            Buy, rent or sell properties easily with PropertyIndia.
            Find your dream home from thousands of verified properties.
          </p>


          {/* SEARCH BOX */}

          <div id="searchBox">

            <div id="searchTabs">

              <button id="buyTab">
                Buy
              </button>

              <button id="rentTab">
                Rent
              </button>

              <button id="sellTab">
                Sell
              </button>

            </div>


            <div id="searchFields">

              <div id="locationField">

                <label id="locationLabel">
                  Location
                </label>

                <input
                  id="locationInput"
                  type="text"
                  placeholder="Enter city or location"
                />

              </div>


              <div id="propertyField">

                <label id="propertyLabel">
                  Property Type
                </label>

                <select id="propertySelect">

                  <option>
                    Select Type
                  </option>

                  <option>
                    Apartment
                  </option>

                  <option>
                    Villa
                  </option>

                  <option>
                    House
                  </option>

                  <option>
                    Plot
                  </option>

                  <option>
                    Office
                  </option>

                </select>

              </div>


              <div id="budgetField">

                <label id="budgetLabel">
                  Budget
                </label>

                <select id="budgetSelect">

                  <option>
                    Select Budget
                  </option>

                  <option>
                    ₹10 Lac - ₹25 Lac
                  </option>

                  <option>
                    ₹25 Lac - ₹50 Lac
                  </option>

                  <option>
                    ₹50 Lac - ₹1 Cr
                  </option>

                  <option>
                    ₹1 Cr+
                  </option>

                </select>

              </div>


              <button id="searchButton">
                Search Property
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* STATS SECTION */}

      <section id="statsSection">

        <div id="propertyStat">

          <h2 id="propertyCount">
            {counts.properties.toLocaleString()}+
          </h2>

          <p id="propertyText">
            Properties
          </p>

        </div>


        <div id="cityStat">

          <h2 id="cityCount">
            {counts.cities}+
          </h2>

          <p id="cityText">
            Cities
          </p>

        </div>


        <div id="customerStat">

          <h2 id="customerCount">
            {counts.customers.toLocaleString()}+
          </h2>

          <p id="customerText">
            Happy Customers
          </p>

        </div>


        <div id="ownerStat">

          <h2 id="ownerCount">
            {counts.owners.toLocaleString()}+
          </h2>

          <p id="ownerText">
            Property Owners
          </p>

        </div>

      </section>


      {/* SMALL WALKING ANIMATION */}

      <section id="lookingSection">

        <h2 id="lookingHeading">
          What Are You Looking For?
        </h2>

        <div id="smallWalkingArea">

          <div id="smallBoy">
            🚶
          </div>

          <div id="smallHouse">
            🏠
          </div>

        </div>

      </section>


      {/* CLICK STAR */}

      {stars.map((star) => (

        <div
          id={`star-${star.id}`}
          className="clickStar"
          key={star.id}
          style={{
            left: star.x,
            top: star.y
          }}
        >
          ⭐
        </div>

      ))}


      {/* PROPERTY CARDS */}

      <div id="propertyCards">


        {/* RENT PROPERTY */}

        <div
          id="rentPropertyCard"
          className={rentShake ? "propertyCardShake" : ""}
        >

          <h3 id="rentPropertyHeading">
            Rent a Property
          </h3>

          <p id="rentPropertyText">
            Find residential and commercial properties available for rent.
          </p>

          <button
            id="rentPropertyButton"
            onClick={() => {

              setRentShake(false);

              setTimeout(() => {
                setRentShake(true);
              }, 10);

              setTimeout(() => {
                setRentShake(false);
              }, 500);

            }}
          >
            Explore Rentals
          </button>

        </div>


        {/* BUY PROPERTY */}

        <div
          id="buyPropertyCard"
          className={buyShake ? "propertyCardShake" : ""}
        >

          <h3 id="buyPropertyHeading">
            Buy a Property
          </h3>

          <p id="buyPropertyText">
            Explore properties available for purchase.
          </p>

          <button
            id="buyPropertyButton"
            onClick={() => {

              setBuyShake(false);

              setTimeout(() => {
                setBuyShake(true);
              }, 10);

              setTimeout(() => {
                setBuyShake(false);
              }, 500);

            }}
          >
            Explore for Sale
          </button>

        </div>


        {/* SELL PROPERTY */}

        <div
          id="sellPropertyCard"
          className={sellShake ? "propertyCardShake" : ""}
        >

          <h3 id="sellPropertyHeading">
            Sell Your Property
          </h3>

          <p id="sellPropertyText">
            List your property and reach genuine buyers & tenants.
          </p>

          <button
            id="sellPropertyButton"
            onClick={() => {

              setSellShake(false);

              setTimeout(() => {
                setSellShake(true);
              }, 10);

              setTimeout(() => {
                setSellShake(false);
              }, 500);

            }}
          >
            List Your Property
          </button>

        </div>


      </div>



      <div id="ownerAgentSection">

  {/* Property Owner */}

  <div id="ownerCard">

    <div id="ownerHeadingArea">

      <span id="ownerIcon">🏢</span>

      <h2 id="ownerHeading">
        For Property Owners
      </h2>

    </div>

    <p id="ownerText">
      List your property and reach thousands of potential tenants and buyers.
    </p>

    <div id="ownerPoints">

      <p id="ownerPoint1">
        <span>✓</span> Residential Properties
      </p>

      <p id="ownerPoint2">
        <span>✓</span> Commercial Properties
      </p>

      <p id="ownerPoint3">
        <span>✓</span> Offices, Shops & Warehouses
      </p>

      <p id="ownerPoint4">
        <span>✓</span> Plots, PGs & More
      </p>

    </div>

    <button id="ownerButton">
      🏠 List Your Property
    </button>

  </div>


  {/* Agent */}

  <div id="agentCard">

    <div id="agentHeadingArea">

      <span id="agentIcon">👥</span>

      <h2 id="agentHeading">
        For Agents & Property Professionals
      </h2>

    </div>

    <p id="agentText">
      Manage your listings, generate enquiries and grow your business with Leez Space.
    </p>

    <div id="agentPoints">

      <p id="agentPoint1">
        <span>✓</span> Manage Multiple Listings
      </p>

      <p id="agentPoint2">
        <span>✓</span> Receive Real Enquiries
      </p>

      <p id="agentPoint3">
        <span>✓</span> Showcase Your Inventory
      </p>

      <p id="agentPoint4">
        <span>✓</span> Grow Your Network
      </p>

    </div>

    <button id="agentButton">
      👥 Join Leez Space
    </button>

  </div>

</div>

    </div>
  );
}

export default App;