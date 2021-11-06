import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { 
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroCTA
} from './HeroElements';

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toogle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
      <Navbar toogle={toogle} />
      <Sidebar isOpen={isOpen} toogle={toogle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>O melhor Restaurante Vegano</HeroH1>
          <HeroP>Experimente já nossos excelentes pratos</HeroP>
          <HeroCTA>Ver cardápio</HeroCTA>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero