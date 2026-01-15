import Layout from '@/pages/client/layout'
import Hero from '@/pages/client/home/hero'
import Services from '@/pages/client/home/services'
import Contact from '@/pages/client/home/contact'

export default function Home() {
  return (
    <Layout breadcrumb_status={false}>
      <Hero />
      <Services />
      <Contact />
    </Layout>
  )
}