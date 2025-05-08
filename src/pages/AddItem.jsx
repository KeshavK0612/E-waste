// src/pages/AddItem.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function AddItem() {
  const [category, setCategory] = useState('');
  const [brandModel, setBrandModel] = useState('');
  const [condition, setCondition] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !brandModel || !condition || quantity < 1) {
      alert('Please fill in all fields.');
      return;
    }

    // Here you’d normally update a global cart state or save to backend
    const newItem = {
      category,
      brandModel,
      condition,
      quantity,
    };
    console.log('Item added to cart:', newItem);
    addToCart(newItem);

    setSuccess(true);

    // Optionally navigate back to dashboard after a delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Add E-Waste Item</h2>

      {success ? (
        <div className="bg-green-100 text-green-700 p-4 rounded shadow">
          ✅ Item added to cart successfully! Redirecting...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow space-y-4">
          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
              <option value="TV">TV</option>
              <option value="Tablet">Tablet</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Brand & Model */}
          <div>
            <label className="block mb-1 font-medium">Brand & Model</label>
            <input
              type="text"
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
              placeholder="e.g., Samsung Galaxy S21"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block mb-1 font-medium">Condition</label>
            <div className="flex gap-4">
              {['Working', 'Not Working', 'Damaged'].map((cond) => (
                <label key={cond} className="flex items-center">
                  <input
                    type="radio"
                    value={cond}
                    checked={condition === cond}
                    onChange={(e) => setCondition(e.target.value)}
                    className="mr-2"
                    required
                  />
                  {cond}
                </label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </form>
      )}
    </div>
  );
}

export default AddItem;
