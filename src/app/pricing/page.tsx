import React from 'react'
import Pricing from '@/components/pricing'
import Download from '@/components/Download'
import Navbar from '@/components/PricingNav'
import Footer from '@/components/Footer'

function page() {
  return (
    <div className='bg-white '>
        <div className="max-w-[1240px] mx-auto">
          <Navbar />
        <Pricing />
        <Download />
        <Footer />
        </div>
    </div>
  )
}

export default page