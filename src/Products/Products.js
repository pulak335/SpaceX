import React, { useEffect, useState } from 'react';
import Product from './Product';
import banner from '../imgs/SpaceX-Logo.wine.svg';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

        const handleSearch = (event) => {
            const searchText = event.target.value;
            const matchedProducts = products.filter(product => {
               return product.rocket.rocket_name.includes(searchText)
            });

            setDisplayProducts(matchedProducts);
    };
    
    
    return (
      <div>
        <img src={banner}  alt="" srcSet="" />
        <div className="input-group mb-4 mt-5">
          <input
            onChange={handleSearch}
            type="text"
            className="form-control"
            placeholder="Search Mission"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {displayProducts
            .sort((a, b) => a.launch_year > b.launch_year)
            .map((product) => (
              <Product key={product.mission_name} product={product}></Product>
            ))}
        </div>
      </div>
    );
};

export default Products;