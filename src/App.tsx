
import Header from "./components/Header";
import BenifitPreview from "./components/BenifitPreview";

import PromoCode from "./images/PromoCodeImage.png";
import SiteBank from "./images/SiteBank.png";
import Investing from "./images/Investing.png";

const App = () => {
  const posts = [<BenifitPreview imageSrc={PromoCode} title="Get Coupon Codes" description= "Add later (In App.tsx)" />,
  <BenifitPreview imageSrc={SiteBank} title="Collect Saved Money" description= "Add later (In App.tsx)" />,
  <BenifitPreview imageSrc={Investing} title="Invest Your Savings" description= "Add later (In App.tsx)" />,
];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {posts.map((post) => {
          return <div>{post}</div>;
        })}
      </main>
    </>
  );
};

export default App;
