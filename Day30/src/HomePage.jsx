import React, { useEffect, useState } from "react";
import Card from "./Card";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const resData = await result.json();
      setData(resData);
      console.log(resData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="title">Redux Shopping Store</div>
      <div className="product-container">
        {data.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
