import Header from "../components/Header";
import BenifitPreview from "../components/BenifitPreview";

import PromoCode from "../images/PromoCodeImage.png";
import SiteBank from "../images/SiteBank.png";
import Investing from "../images/Investing.png";

const Home = () => {

  const posts = [<BenifitPreview imageSrc={PromoCode} title="Get Coupon Codes" description= "Add later (In App.tsx)" />,
  <BenifitPreview imageSrc={SiteBank} title="Collect Saved Money" description= "Add later (In App.tsx)" />,
  <BenifitPreview imageSrc={Investing} title="Invest Your Savings" description= "Add later (In App.tsx)" />,
];

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome to CouponKings!</h1>
        <p>Discover the best deals and save money.</p>
        {posts.map((post) => {
          return <div>{post}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
