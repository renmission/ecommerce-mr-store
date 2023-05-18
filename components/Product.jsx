import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const Product = ({ product: { image, name, slug, price } }) => {
  return <>

  <Link href={`/product/${slug.current}`}>
    <div className="product-card">
      <img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
      <p className="product-name">{name}</p>
      <p className="product-price">{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</p>
    </div>
  </Link>
  </>;
};

export default Product;
