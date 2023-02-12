import React from "react";
import styled from "styled-components";
import videoBg from "./videos/videoBg.mp4";

const Button = styled.button`
  & {
    margin: 15px auto 0 auto;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 5px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(
      45deg,
      rgb(46, 164, 79) 25%,
      rgb(80, 200, 100) 51%,
      rgb(46, 164, 79) 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-items: center;
  'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
`;

export default function Hero() {
  return (
    <HeroContainer className='videoContainer'>
      <video src={videoBg} autoPlay muted loop className='video' />
      <div className='heroText'>
        <h1 className='heroTitle' style={{ zIndex: 2 }}>
          ONLINE <br /> BRAZILIAN <br /> GUITAR <br /> LESSONS
        </h1>
        <div className='heroSubtitle' style={{ fontWeight: "bold" }}>
          WITH ROCHO
        </div>
        <Button>Sign up</Button>
      </div>
    </HeroContainer>
  );
}
