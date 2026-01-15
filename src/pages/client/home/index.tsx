
import Layout from "../layout";
import Contact from "./contact";
import Hero from "./hero";
import Services from "./services";

const Page = () => {
  return (
    <Layout breadcrumb_status={false}>
      

      <Hero />
      <Services />
      <Contact />
    </Layout>
  );
}

export default Page;
