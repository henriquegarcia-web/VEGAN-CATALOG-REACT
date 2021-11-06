import React from 'react'
import {
  FeatureContainer,
  FeatureButton
} from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Veja os pratos mais pedidos da semana</h1>
      <p>Acompanhe a tendência dos pratos que mais estão saindo na VeganFood</p>
      <FeatureButton>Ver agora</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature
