import React, { useState } from "react";

const Dashboard = () => {
  // State to manage saved money, recent purchases, and input for redeeming/investing
  const [moneySaved, setMoneySaved] = useState(250.0); // Example: $250 saved
  const [recentPurchases, setRecentPurchases] = useState([
    { item: "Groceries", amount: 50, date: "2025-01-10" },
    { item: "Electronics", amount: 100, date: "2025-01-12" },
    { item: "Clothing", amount: 20, date: "2025-01-15" },
  ]);
  const [investAmount, setInvestAmount] = useState("");
  const [redeemAmount, setRedeemAmount] = useState("");

  // Handlers for investing and redeeming money
  const handleInvest = () => {
    const amount = parseFloat(investAmount);
    if (!isNaN(amount) && amount > 0 && amount <= moneySaved) {
      setMoneySaved(moneySaved - amount);
      alert(`Successfully invested $${amount.toFixed(2)}!`);
      setInvestAmount("");
    } else {
      alert("Invalid amount to invest.");
    }
  };

  const handleRedeem = () => {
    const amount = parseFloat(redeemAmount);
    if (!isNaN(amount) && amount > 0 && amount <= moneySaved) {
      setMoneySaved(moneySaved - amount);
      alert(`$${amount.toFixed(2)} has been transferred to your bank account!`);
      setRedeemAmount("");
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
            src="CouponKing.png"
            alt="Logo"
            className="h-10 w-10 mr-3"
          />
          <h1 className="text-2xl font-bold text-black">Coupon Kings</h1>
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
            <input
              type="number"
              placeholder="Enter amount to invest"
              value={investAmount}
              onChange={(e) => setInvestAmount(e.target.value)}
              className="border p-2 rounded w-1/2 mr-2"
            />
            <button
              onClick={handleInvest}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Invest
            </button>
          </div>
        </section>

        {/* Section 3: Redeem Money */}
        <section className="bg-gray-100 p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Redeem Your Savings</h2>
          <p>Transfer your saved money directly to your bank account.</p>
          <div className="mt-4">
            <input
              type="number"
              placeholder="Enter amount to redeem"
              value={redeemAmount}
              onChange={(e) => setRedeemAmount(e.target.value)}
              className="border p-2 rounded w-1/2 mr-2"
            />
            <button
              onClick={handleRedeem}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Redeem
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
