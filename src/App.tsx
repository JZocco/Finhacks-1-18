import BirdPreview from "./components/BirdPreview";
import Header from "./components/Header";

import Bird1 from "./images/bird1.jpg";
import Bird2 from "./images/bird2.jpg";
import Bird3 from "./images/bird3.jpg";

const App = () => {
  const posts = [<BirdPreview imageSrc={Bird1} title="Fruity ahh bird" desription="He lowkey wanna eat some fruity pebbles" />,
  <BirdPreview imageSrc={Bird2} title="Blue boy" desription="He j be blue n shi" />,
  <BirdPreview imageSrc={Bird3} title="yucky bird" desription="dumb face, wanna just throw him" />];

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
