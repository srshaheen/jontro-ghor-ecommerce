import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCatergories from '@/components/HomeCatergories'
import ProductGrid from '@/components/ProductGrid'
import { getCategories } from '@/sanity/queries'

const Home = async () => {
  const catergories = await getCategories(6)
  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCatergories categories={catergories} />
    </Container>
  )
}
export default Home
