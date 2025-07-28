'use client'

import { useEffect, useState } from 'react'
import HomeTabbar from './HomeTabbar'
import { productType } from '@/constants'
import { client } from '@/sanity/lib/client'

const ProductGrid = () => {
  const [products, setProducts] = useState([])
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
        console.log(response)
      } catch (error) {
        console.error('products fetching errr:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [selectedTab])

  return (
    <div>
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? <div></div> : <>products</>}
    </div>
  )
}
export default ProductGrid
