import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

const HeroBanner = ({ heroBanner: { smallText, midText, largeText1, product, buttonText, desc, image } }) => {

  return (
    <div  className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <img src={urlFor(image)} alt='headphones' className='hero-banner-image' />
            <div>
              <Link href={`/product/${product.slice(0, 1).toLowerCase() + product.slice(1)}`}>
                <button type='button'>{buttonText}</button>
              </Link>
              <div className='desc'>
                <h5>Descriptions</h5>
                <p>{desc}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
