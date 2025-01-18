import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Dashboard = () => {
  // State to manage saved money, recent purchases, and redeem modal
  const [moneySaved, setMoneySaved] = useState(250.0); // Example: $250 saved
  const [recentPurchases] = useState([
    { item: "Groceries", amount: 50, date: "2025-01-10" },
    { item: "Electronics", amount: 100, date: "2025-01-12" },
    { item: "Clothing", amount: 20, date: "2025-01-15" },
  ]);
  const [showRedeemModal, setShowRedeemModal] = useState(false);

  const navigate = useNavigate(); // Navigation hook

  // Handle redeem submission
  const handleRedeem = (redeemAmount: number) => {
    if (redeemAmount > 0 && redeemAmount <= moneySaved) {
        setMoneySaved(moneySaved - redeemAmount); // Deduct from moneySaved
        alert(`$${redeemAmount.toFixed(2)} has been transferred to your bank account!`);
        setShowRedeemModal(false); // Close the modal
      } else {
        alert("Invalid amount to redeem.");
    }
  };

  return (
    <div className="w-screen h-screen">
      {/* Header Section */}
      <header className="bg-blue-100 p-4 flex justify-between items-center">
        {/* Left: Logo and Name */}
        <div className="flex items-center">
          <img
            src="CouponKing.png" // Replace with your actual logo URL
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <h1 className="text-2xl font-bold text-black">CouponKings</h1>
        </div>

        {/* Right: Account Details Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => alert("Account details coming soon!")}
        >
          Account Details
        </button>
      </header>

      {/* Dashboard Content */}
      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard!</h1>

        {/* Section 1: Treasury */}
        <section className="bg-gray-100 p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Treasury</h2>
          <p className="text-xl">
            Money Saved: <span className="font-bold">${moneySaved.toFixed(2)}</span>
          </p>
          <h3 className="text-lg font-semibold mt-4">Recent Purchases</h3>
          <ul className="list-disc list-inside">
            {recentPurchases.map((purchase, index) => (
              <li key={index}>
                {purchase.item}: ${purchase.amount.toFixed(2)} on {purchase.date}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Invest Money */}
        <section className="bg-gray-100 p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Invest Your Savings</h2>
          <p>Let us grow your money for you by investing it wisely!</p>
          <div className="mt-4">
            <button
              onClick={() => navigate("/investment")} // Navigate to Investment page
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go to Investment Page
            </button>
          </div>
        </section>

        {/* Section 3: Redeem Money */}
        <section className="bg-gray-100 p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Redeem Your Savings</h2>
          <p>Transfer your saved money directly to your bank account.</p>
          <div className="mt-4">
            <button
              onClick={() => setShowRedeemModal(true)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Redeem
            </button>
          </div>
        </section>
      </div>

      {/* Redeem Modal */}
      {showRedeemModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Redeem Your Savings</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement; // Add this line
                const amount = parseFloat((form.elements.namedItem("redeemAmount") as HTMLInputElement).value); // Add this line
                handleRedeem(amount); // Call your redeem function
              }}
            >
              <input
                type="number"
                name="redeemAmount"
                placeholder="Enter amount to redeem"
                className="border p-2 rounded w-full mb-4"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
              >
                Redeem
              </button>
            </form>
            <button
              onClick={() => setShowRedeemModal(false)}
              className="mt-4 text-red-500 underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
