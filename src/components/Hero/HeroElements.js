import styled from "styled-components";
import ImgBg from '../../images/place.jpg'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 650px) {
    width: 100%;
  } 
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px greenyellow;
  padding: 10px 0;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.4rem, 1.5vw, 2rem);
  margin-bottom: 2rem;
  line-height: 1.2;
  font-weight: 500;
`;

export const HeroCTA = styled.button`
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 1rem 4rem;
  background: greenyellow;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: yellowgreen;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;