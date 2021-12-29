import { StatusBar } from 'expo-status-bar'
import loader from '../assets/spinner.gif'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'
import React from 'react'

export default class QuizScreen extends React.Component {
  state = {
    currentQuestion: 0,
    isLoaded: false,
    questions: [],
    options: [],
    correctAnswer: '',
    score: 0
  }

  componentDidMount () {
    this.fetch()
  }

  async fetch () {
    const url = 'https://opentdb.com/api.php?amount=10'
    const data = await fetch(url)
      .then(data => data.json())
      .then(data => {
        const options =
          data.results[this.state.currentQuestion].incorrect_answers
        const correctAnswer =
          data.results[this.state.currentQuestion].correct_answer

        options.push(correctAnswer)

        console.log(options)

        this.setState({
          isLoaded: true,
          questions: data.results,
          options: options,
          correctAnswer: correctAnswer
        })
      })
      .catch(e => console.log(e))
  }

  checkAnswer (selectedAnswer) {
    let currentQuestion = this.state.currentQuestion
    currentQuestion += 1

    if (currentQuestion < this.state.questions.length) {
      if (this.state.correctAnswer == selectedAnswer) {
        console.log("It's correct")
        let score = this.state.score
        score += 1
        this.setState({
          score
        })
      } else {
        console.log("It's not correct")
      }

      const options = this.state.questions[currentQuestion].incorrect_answers
      const correctAnswer = this.state.questions[currentQuestion].correct_answer

      options.push(correctAnswer)

      this.setState({
        currentQuestion,
        options,
        correctAnswer
      })
    } else {
      this.props.navigation.navigate('ResultScreen', {
        score: this.state.score
      })
    }
  }

  render () {
    if (this.state.isLoaded) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {this.state.questions[this.state.currentQuestion].question}
            </Text>
          </View>

          <View style={styles.answerContainer}>
            <TouchableOpacity
              onPress={() => {
                this.checkAnswer(this.state.options[0])
              }}
              style={styles.button}
            >
              <Text style={styles.answerText}>{this.state.options[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.checkAnswer(this.state.options[1])
              }}
              style={styles.button}
            >
              <Text style={styles.answerText}>{this.state.options[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.checkAnswer(this.state.options[2])
              }}
              style={styles.button}
            >
              <Text style={styles.answerText}>{this.state.options[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.checkAnswer(this.state.options[3])
              }}
              style={styles.button}
            >
              <Text style={styles.answerText}>{this.state.options[3]}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={{
              marginHorizontal: 100,
              marginVertical: 200
            }}
            source={require('../assets/spinner.gif')}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  button: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  questionContainer: {
    marginHorizontal: 30,
    marginVertical: 20
  },
  question: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  },
  answerContainer: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  answerText: {
    fontSize: 18,
    color: '#fff'
  }
})
