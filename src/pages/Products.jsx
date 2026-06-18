import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 important pattern
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <Row className="g-4 mb-4">
      {products.map((p) => (
        <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={p} />
        </Col>
      ))}
    </Row>
  );
}

export default Products;
