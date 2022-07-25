import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  align-items: center;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 550px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    width: 70%;
    max-width: 1440px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: none;
  outline: none;
  width: 20%;
  margin-left: 20px;
  margin-right: 5px;
  margin-bottom: 15px;
`
export const Text = styled.p`
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 1px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  margin-right: 20px;
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const ScoreText = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  margin-bottom: 1px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreCount = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: #223a5f;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
