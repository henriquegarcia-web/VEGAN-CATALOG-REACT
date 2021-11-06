import React from 'react'
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImgContainer,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductCta
} from './ProductsElements'

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{ heading }</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImgContainer>
                <ProductImg src={product.img} alt={product.alt} />
              </ProductImgContainer>
              <ProductInfo>
                <ProductTitle>{ product.alt }</ProductTitle>
                <ProductDesc>{ product.desc }</ProductDesc>
                <ProductPrice>{ product.price }</ProductPrice>
                <ProductCta>{ product.cta }</ProductCta>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
