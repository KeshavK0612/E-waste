import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, clearCart } = useCart();

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      clearCart();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id || index}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.category}</p>
                <p className="text-sm text-gray-500">
                  {item.brandModel} - {item.condition}
                </p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-green-600">Est. ₹XYZ</p> {/* Add price if needed */}
            </div>
          ))}

          <button
            onClick={handleClear}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
