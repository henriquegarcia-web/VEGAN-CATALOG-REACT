import styled from "styled-components";
import FeatureImg from '../../images/background_02.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeatureImg});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  line-height: 1.2;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 30px;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0.6rem 3rem;
  background: greenyellow;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: yellowgreen;
    cursor: pointer;
    transition: 0.2s ease-out;
  }
`;