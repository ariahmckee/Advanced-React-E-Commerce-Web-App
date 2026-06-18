import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { getProduct, updateProduct, deleteProduct } from "../services/api";
import DeleteModal from "../components/DeleteModal";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // 👈 controls modal

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);

  // 🔄 Fetch existing product
  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setForm({
          title: res.data.title || "",
          price: res.data.price ? res.data.price.toFixed(2) : "",
          description: res.data.description || "",
          category: res.data.category || "",
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  // 📝 Handle input changes (clean + scalable)
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 💾 Save updates
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(id, form);
    alert("NOTE: API.put request made to FakeStoreAPI, but it won't persist");
    navigate(`/products/${id}`);
  };

  // 🗑 Delete product
  const handleDelete = async () => {
    await deleteProduct(id);
    alert(
      "NOTE: API.delete request made to FakeStoreAPI, but it won't persist",
    );
    navigate("/products");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Product</h2>

      <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mt-3">
        <Form.Control
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <Form.Control
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <Form.Control
          as="textarea"
          rows={4}
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <Form.Control
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <div className="d-flex gap-2 mt-3">
          <Button type="submit">Save Changes</Button>

          <Button
            variant="secondary"
            onClick={() => navigate(`/products/${id}`)}
          >
            Cancel
          </Button>

          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete
          </Button>

          <DeleteModal
            show={showModal}
            onHide={() => setShowModal(false)}
            onConfirm={handleDelete}
          />
        </div>
      </Form>
    </div>
  );
}

export default EditProduct;
