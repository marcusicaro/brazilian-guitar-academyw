import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  height: 350px;
  width: 250px;
  background: rgb(46, 164, 79);
  border-radius: 40px;
  overflow: hidden;
  text-decoration: none;
  position: relative;
  display: block;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover .cardOverlay {
    transform: translateY(0);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardOverlay = styled.div`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`;

const CardHeader = styled.div`
  z-index: 999;
  position: fixed;
  width: 75%;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 2em;
  border-radius: 40px 0 0 0;
  background-color: white;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

const CardTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
`;

const CardStatus = styled.span`
  font-size: 0.8em;
  color: #d7bdca;
`;

const CardDescription = styled.p`
  padding: 0 2em 2em;
  z-index: 20;
  margin: 0;
  color: #d7bdca;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default function LatestLessons() {
  return (
    <div>
      <TitleContainer>
        <h2>LATEST LESSONS</h2>
        <h4>Our latest lessons</h4>
      </TitleContainer>
      <CardsContainer>
        <Card>
          <CardImage></CardImage>
          <CardOverlay className='cardOverlay'>
            <CardHeader>
              <svg
                className='card__arc'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  zIndex: "1",
                }}
              >
                <path
                  style={{
                    fill: "white",
                    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
                  }}
                />
              </svg>
              <img
                className='card__thumb'
                src='https://i.imgur.com/7D7I6dI.png'
                alt=''
                style={{
                  flexShrink: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginBottom: "-2px",
                }}
              />
              <div className='cardHeaderText'>
                <CardTitle>Rocho exemplo</CardTitle>
                <CardStatus>Subtítulo?</CardStatus>
              </div>
            </CardHeader>
            <CardDescription>Teste descrição do curso.</CardDescription>
          </CardOverlay>
        </Card>
        <Card>
          <CardImage></CardImage>
          <CardOverlay className='cardOverlay'>
            <CardHeader>
              <svg
                className='card__arc'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  zIndex: "1",
                }}
              >
                <path
                  style={{
                    fill: "white",
                    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
                  }}
                />
              </svg>
              <img
                className='card__thumb'
                src='https://i.imgur.com/7D7I6dI.png'
                alt=''
                style={{
                  flexShrink: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginBottom: "-2px",
                }}
              />
              <div className='cardHeaderText'>
                <CardTitle>Rocho exemplo</CardTitle>
                <CardStatus>Subtítulo?</CardStatus>
              </div>
            </CardHeader>
            <CardDescription>Teste descrição do curso.</CardDescription>
          </CardOverlay>
        </Card>
        <Card>
          <CardImage></CardImage>
          <CardOverlay className='cardOverlay'>
            <CardHeader>
              <svg
                className='card__arc'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  zIndex: "1",
                }}
              >
                <path
                  style={{
                    fill: "white",
                    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
                  }}
                />
              </svg>
              <img
                className='card__thumb'
                src='https://i.imgur.com/7D7I6dI.png'
                alt=''
                style={{
                  flexShrink: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginBottom: "-2px",
                }}
              />
              <div className='cardHeaderText'>
                <CardTitle>Rocho exemplo</CardTitle>
                <CardStatus>Subtítulo?</CardStatus>
              </div>
            </CardHeader>
            <CardDescription>Teste descrição do curso.</CardDescription>
          </CardOverlay>
        </Card>
        {/* <Card>
          <CardImage></CardImage>
          <CardOverlay className='cardOverlay'>
            <CardHeader>
              <svg
                className='card__arc'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: "100%",
                  right: "0",
                  zIndex: "1",
                }}
              >
                <path
                  style={{
                    fill: "white",
                    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
                  }}
                />
              </svg>
              <img
                className='card__thumb'
                src='https://i.imgur.com/7D7I6dI.png'
                alt=''
                style={{
                  flexShrink: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginBottom: "-2px",
                }}
              />
              <div className='cardHeaderText'>
                <CardTitle>Rocho exemplo</CardTitle>
                <CardStatus>Subtítulo?</CardStatus>
              </div>
            </CardHeader>
            <CardDescription>Teste descrição do curso.</CardDescription>
          </CardOverlay>
        </Card> */}
      </CardsContainer>
    </div>
  );
}
