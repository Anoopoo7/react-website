import React from "react";
import "./diversity.css";

function Diversity() {
  return (
    //   body starts
    <div className="body">
      {/* text side starts */}
      <div className="text">
        {/* header starts */}
        <div className="header">
          <h3>TRVL</h3>
          <div className="nav">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">About</a>
          </div>
        </div>
        {/* header ends */}

        {/* main contents starts */}
        <div className="main-contents">
          <h4>Reiserfeiner</h4>
          <h1>Ultimate in diversity</h1>
          {/* just for a line */}
          <div className="line">__________</div>
          <h4>Mount Himalaya</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit hic
            amet explicabo? Ipsam, ullam! Autem eius labore molestiae itaque,
            distinctio maxime nihil nam quas excepturi, quasi officia similique
            iure dolore.
          </p>
          <button>View More</button>
        </div>
        {/* main contents ends */}
      </div>
      {/* text side ends */}

      {/* image side starts */}
      <div className="imageside">
          {/* header section starts */}
          <div className="header1">
              <div className="search">
              <input id="text" type="text"/>
              <input id="submit" type="submit" value="Search"/>
              </div>
              <a href="#">Blog</a>
              <a href="#">Support</a>
          </div>
          {/* header section ends */}

          {/* floating section starts */}
          <div className="float">
              <div className="inside">
                  <h3>Height</h3>
                  <h4>4.034</h4>
              </div>
              <div className="inside">
                  <h3>Category</h3>
                  <h4>9 in middle</h4>
              </div>
              <div className="inside">
                  <h3>Location</h3>
                  <h4>India</h4>
              </div>
          </div>
          {/* floating section ends */}
      </div>
    </div>
    // body ends
  );
}
export default Diversity;
