import React, { useEffect, useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productapi-jsns.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h1
          className="text-center mb-5 fw-bold text-uppercase"
          style={{ fontSize: "2.5rem" }}
        >
          Shop the Best Deals
        </h1>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card border-0 shadow-sm h-100 product-card">
                <div
                  className="position-relative text-center bg-white p-3"
                  style={{ height: "250px" }}
                >
                  <img
                    src={product.url}
                    className="img-fluid h-100"
                    alt={product.name}
                    style={{
                      objectFit: "contain",
                      transition: "transform 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="fw-bold text-truncate" title={product.title}>
                    {product.description}
                  </h6>
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                    <span className="small text-muted">(250 reviews)</span>
                  </div>
                  <h5 className="fw-bold text-danger">
                    ${product.price.toFixed(2)}
                  </h5>
                  <button className="btn btn-outline-primary w-100 mt-3 d-flex align-items-center justify-content-center gap-2 fw-bold">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        className="btn btn-danger rounded-circle position-fixed"
        style={{ bottom: "20px", right: "20px", width: "60px", height: "60px" }}
      >
        <FaShoppingCart size={24} />
      </button>
    </div>
  );
};

export default Products;
