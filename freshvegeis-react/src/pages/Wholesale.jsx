import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wholesale = () => {
  return (
    <>
      <Header />

      <header className="wholesale-header">
        <h1>Wholesale Policy</h1>

        <p>
          Supplying fresh vegetables & fruits in bulk to businesses with quality
          assurance
        </p>
      </header>

      <div className="policy-container">
        <div className="policy-section">
          <img src="./assets/images/wholesale1.jpg" alt="Bulk Vegetables" />

          <div className="policy-text">
            <h2>Wholesale Opportunities</h2>

            <p>
              We provide fresh vegetables and fruits in bulk to supermarkets,
              restaurants, hotels, and distributors. Our wholesale program
              ensures competitive pricing and top-quality produce.
            </p>

            <ul>
              <li>Bulk supply of seasonal vegetables & fruits</li>

              <li>Special rates for long-term partnerships</li>

              <li>Flexible delivery schedules</li>
            </ul>
          </div>
        </div>

        <div className="policy-section">
          <div className="policy-text">
            <h2>Wholesale Conditions</h2>

            <p>
              To maintain fair pricing and smooth operations, the following
              conditions apply to wholesale orders:
            </p>

            <ul>
              <li>Minimum order quantity: 50 kg per product type.</li>

              <li>Orders must be placed at least 48 hours in advance.</li>

              <li>
                Payments must be made via approved methods (bank transfer /
                online).
              </li>

              <li>
                Returns accepted only for damaged or spoiled products upon
                delivery.
              </li>
            </ul>
          </div>

          <img
            src="./assets/images/wholesale2.jpg"
            alt="Fresh Fruits in Bulk"
          />
        </div>

        <div className="policy-section">
          <img src="./assets/images/wholesale3.jpg" alt="Farm to Business" />

          <div className="policy-text">
            <h2>Why Partner With Us?</h2>

            <p>
              We believe in building long-term relationships with our wholesale
              clients by offering:
            </p>

            <ul>
              <li>Guaranteed farm-fresh quality</li>
              <li>Support for sustainable farming practices</li>
              <li>Timely delivery and reliable logistics</li>
              <li>Customized supply options based on demand</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wholesale;
