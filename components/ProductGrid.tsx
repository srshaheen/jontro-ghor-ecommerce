'use client'

import { useEffect, useState } from 'react'
import HomeTabbar from './HomeTabbar'
import { productType } from '@/constants'
import { client } from '@/sanity/lib/client'
import { AnimatePresence, motion } from 'motion/react'
import { Loader2 } from 'lucide-react'
import NoProductAvailable from './NoProductAvailable'
import ProductCard from './ProductCard'
import { Product } from '@/sanity.types'

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '')

  const query = `*[_type == "product" && variant== $variant] | order(name desc){
  ...,"categories":categories[]->title
}`

  const params = { variant: selectedTab.toLowerCase() }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await client.fetch(query, params)
        setProducts(response)
      } catch (error) {
        console.error('products fetching errr:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [selectedTab])

  return (
    <div className='py-10'>
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className='mt-10 flex min-h-80 w-full flex-col items-center justify-center gap-4 bg-gray-100 py-10'>
          <div className='flex items-center space-x-2 text-blue-600'>
            <Loader2 className='h-5 w-6 animate-spin' />
            <span>Product is loading...</span>
          </div>
        </div>
      ) : products?.length ? (
        <div className='mt-10 grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5'>
          {products?.map(product => (
            <AnimatePresence key={product?._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  )
}
export default ProductGrid
