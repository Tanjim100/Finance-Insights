import Banner from "../../components/Banner";
import FeaturedPosts from "../../components/FeaturedPosts";
import ExploreTopics from "../../components/ExploreTopics";
import ResourceLibrary from "../../components/ResourceLibrary";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedPosts />
      <ExploreTopics />
      <ResourceLibrary />
    </div>
  );
};

export default Home;
