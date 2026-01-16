import Layout from '../layout';
import Hero from './hero';
import Services from './services';
import ContactSection from './contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <ContactSection />
    </Layout>
  );
};

export default Home;