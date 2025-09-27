import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import FeaturedPosts from '../../components/FeaturedPosts';
import ExploreTopics from '../../components/ExploreTopics';
import ResourceLibrary from '../../components/ResourceLibrary';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPosts></FeaturedPosts>
      <ExploreTopics></ExploreTopics>
      <ResourceLibrary></ResourceLibrary>
    </div>
  );
};

export default Home;