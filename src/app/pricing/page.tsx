import React from 'react'
import Pricing from '@/components/pricing'
import Download from '@/components/Download'
import Navbar from '@/components/PricingNav'
import Footer from '@/components/Footer'

function page() {
  return (
    <div className='bg-white'>
        <Navbar />
        <Pricing />
        <Download />
        <Footer />
    </div>
  )
}

export default page