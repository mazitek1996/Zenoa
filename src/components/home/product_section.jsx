import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./product_section.css";

const products = [
  {
    title: "Product 1",
    description: "Description of Product 1",
    imageUrl:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop",
    details: "Details for Product 1. Additional information goes here.",
  },

  {
    title: "Product 2",
    description: "Description of Product 2",
    imageUrl:
      "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Details for Product 2. Additional information goes here.",
  },

  {
    title: "Product 3",
    description: "Description of Product 3",
    imageUrl:
      "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Details for Product 3. Additional information goes here.",
  },

  {
    title: "Product 4",
    description: "Description of Product 4",
    imageUrl:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Details for Product 4. Additional information goes here.",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow rounded product-container-card">
      <img
        src={product.imageUrl}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-text-content">
        <div className="card-body product_section_card-body">
          <h5 className="card-title product_section_title">{product.title}</h5>
          <p className="card-text product_section_description">
            {product.description}
          </p>
          <p className="card-text product_section_details">{product.details}</p>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="product-card-root mt-4">
      <div className="product-section-container container">
     

        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          <div className="col">
            <ProductCard product={products[0]} />
          </div>
          <div className="col">
            <ProductCard product={products[1]} />
          </div>
          <div className="col">
            <ProductCard product={products[2]} />
          </div>
          <div className="col">
            <ProductCard product={products[3]} />
          </div>
        </div>
        
        <div className="product-view-all">
          <Link to="/products">
            <button type="button" class="btn btn-outline-primary">
              See All Zenoa's Product <FaArrowRight />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;
