import React from 'react'

const ProductDetails = ({params,} : {params: {productId :string}}) => {
  return (
    <div>This is Product - {params.productId}</div>
  )
}

export default ProductDetails