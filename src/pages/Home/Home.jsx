import Banner from "../../components/Banner";
import FeaturedPosts from "../../components/FeaturedPosts";
import ExploreTopics from "../../components/ExploreTopics";
import ResourceLibrary from "../../components/ResourceLibrary";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | FINANCE INSIGHTS</title>
        <meta name="description" content="This is the home page of my React site" />
        {/* <meta property="og:title" content="Home Page" />
        <meta property="og:image" content="/banner.jpg" /> */}
      </Helmet>
      <div>
        <Banner />
        <FeaturedPosts />
        <ExploreTopics />
        <ResourceLibrary />
      </div>
    </>
  );
};

export default Home;
