import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCatergories from '@/components/HomeCatergories'
import ProductGrid from '@/components/ProductGrid'

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCatergories />
    </Container>
  )
}
export default Home
