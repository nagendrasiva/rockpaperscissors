import {Component} from 'react'

import {
  AppContainer,
  ScoreCardContainer,
  TextContainer,
  Text,
  ScoreCard,
  ScoreText,
  ScoreCount,
} from './styledComponents'

class PlayingView extends Component {
  state = {score: 0}

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ScoreCardContainer>
          <TextContainer>
            <Text>ROCK</Text>

            <Text>PAPER</Text>

            <Text>SCISSORS</Text>
          </TextContainer>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <ScoreCount>{score}</ScoreCount>
          </ScoreCard>
        </ScoreCardContainer>
      </AppContainer>
    )
  }
}

export default PlayingView
