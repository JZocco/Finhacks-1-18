const Header = () => {
  return (
    <header className="bg-blue-100 w-screen p-4">
      <ul className="text-xl flex justify-between items-center">
        {/* Left side: Image and title */}
        <div className="flex items-center">
          <img src="CouponKing.png" alt="Logo" className="h-10 w-10 mr-3" />
          <li className="text-black-700 text-3xl font-bold">CouponKings</li>
        </div>

        {/* Right side: Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
