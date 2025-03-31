import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Our E-Commerce Store</h1>
            <p>Shop the best products here!</p>
            <Link to="/products">Go to Products</Link>
        </div>
    );
}

export default Home;
