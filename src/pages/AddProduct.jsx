import { useState } from "react";
import { addProduct } from "../services/api";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form, // 👈 immutable update
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(form);
    alert("NOTE: API.post request made to FakeStoreAPI, but it won't persist");
    navigate(`/products`);
  };

  const navigate = useNavigate();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control name="title" onChange={handleChange} placeholder="Title" />
      <Form.Control name="price" onChange={handleChange} placeholder="Price" />
      <Form.Control name="description" onChange={handleChange} placeholder="Description" />
      <Form.Control name="category" onChange={handleChange} placeholder="Category" />

      {/* <Button type="submit" onClick={() => navigate(`/products`)}>Add Product</Button> */}
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default AddProduct;