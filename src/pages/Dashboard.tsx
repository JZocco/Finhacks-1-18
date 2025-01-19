import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Dashboard = () => {
  // State to manage saved money, recent purchases, redeem modal, and account modal
  const [moneySaved, setMoneySaved] = useState(250.0); // Example: $250 saved
  const [recentPurchases] = useState([
    { item: "Groceries", amount: 50, date: "2025-01-10" },
    { item: "Electronics", amount: 100, date: "2025-01-12" },
    { item: "Clothing", amount: 20, date: "2025-01-15" },
  ]);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false); // State for account modal

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

  // Logout handler
  const handleLogout = () => {
    // Add any logout logic here (e.g., clear user session data)
    alert("You have been logged out!");
    navigate("/"); // Redirect to home screen
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
          <h1 className="text-2xl font-bold text-black">Couvest</h1>
        </div>

        {/* Right: Account Details Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowAccountModal(true)} // Open the account modal
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

      {/* Account Details Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Account Details</h2>
            <div className="mb-4">
              <p><strong>Username:</strong> JohnDoe</p>
              <p><strong>Email:</strong> john.doe@example.com</p>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleLogout} // Logout and redirect to home
              >
                Log Out
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => alert("Change password functionality coming soon!")}
              >
                Change Password
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => alert("Account preferences functionality coming soon!")}
              >
                Account Preferences
              </button>
            </div>
            <button
              className="mt-4 text-blue-500 underline w-full text-center"
              onClick={() => setShowAccountModal(false)} // Close the modal
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
