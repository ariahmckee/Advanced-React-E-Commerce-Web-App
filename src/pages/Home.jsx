import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero-container text-center text-white">
      <div className="hero-overlay">
        <h1>Welcome to FakeStore</h1>
        <p>Handcrafted goods, curated just for you</p>

        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </div>
    </div>
  );
}

export default Home;
