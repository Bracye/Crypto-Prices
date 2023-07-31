import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const apiKey = "8E092081-5E38-4C54-BD24-9C58F855DA63";

// Function to fetch coin data
const getCoin = async (symbol, setCoin, setLoading) => {
  try {
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
    setLoading(false);
  } catch (e) {
    console.error(e);
    setLoading(false);
  }
};

const Price = (props) => {
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;

  // State to hold the coin data
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin(symbol, setCoin, setLoading);
  }, [symbol]);

  // Render function for when data is fetched
  const renderLoaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Render function for when data is not yet fetched
  const renderLoading = () => {
    return <h1>Loading...</h1>;
  };

  // Conditional rendering based on whether data is loaded or not
  return loading ? renderLoading() : coin && coin.rate ? renderLoaded() : null;
};

export default Price;
