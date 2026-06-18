import { useQuery } from "@tanstack/react-query";
import { Col, Row } from "react-bootstrap";
import { getCategories, getProducts } from "../services/api";
import ErrorAlert from "./ErrorAlert";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";

function ProductCatalog() {
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      return response.data;
    },
  });

  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await getProducts();
      return response.data;
    },
  });

  if (categoriesLoading || productsLoading) return <LoadingSpinner />;

  if (categoriesError || productsError) {
    return <ErrorAlert message="Failed to load products. Please try again." />;
  }

  return (
    <section className="catalog-section text-start">
      <div className="mb-4">
        <h2 className="mb-1">Shop the Collection</h2>
        <p className="catalog-subtitle mb-0">
          Browse {products.length} products across {categories.length} categories.
        </p>
      </div>

      <Row className="g-4 mb-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ProductCatalog;
