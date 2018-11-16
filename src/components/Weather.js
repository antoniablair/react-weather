import React, { Component } from 'react';

import { css } from 'aphrodite';

import Emoji from './Emoji';
import Forecast from './Forecast';

import { StyleSheet } from 'aphrodite';

import colors from '../common/colors';
import config from '../config';

import weatherData from '../weatherData';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.paper,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    padding: '10px 10px',
  },

  margin15: {
    margin: '15px 15px',
  },

  button: {
    backgroundColor: colors.gold,
    width: 200,
    height: 45,
    border: '0px solid',
    fontSize: '14px',
    marginLeft: '-1px',
    '@media (min-width: 992px)': {
        width: 300,
    }
  },

  input: {
    fontSize: '14px',
    height: 46,
    border: '0px solid',
    padding: '0px 0px 0px 10px',
    outline: 'none',
    ':focus': {
      outline: 'none',
    }
  },

  largeFont: {
    fontSize: '38px',
  },

  inlineBlock: {
    display: 'inline-block',
  },

  hover: {
    ':hover': {
      backgroundColor: colors.brightCoral,
      cursor: 'pointer',
    }
  },

  instructions: {
    fontSize: '18px',
  },

  forecast: {
    fontSize: '24px',
    marginTop: '20px',
  }
});

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      error: null,
      city: 'Kansas City',
    };

    this.onChangeCity = this.onChangeCity.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    const weatherApiKey = config.weatherApiKey;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${weatherApiKey}`;

    this.setState({
      weatherData
    })

    // fetch(url)
    //   .then(response => response.json())
    //   .then(weatherData => {
    //     this.setState({ weatherData });
    //   })
    //   .catch(error => console.error('Error:', error))
  }

  onChangeCity(event) {
    this.setState({
      city : event.target.value
    });
  }

  render() {
    return (
      <div className={css(styles.card)}>
        <header className={css([styles.largeFont, styles.inlineBlock])}>
        <div>
          <Emoji label='umbrella' symbol='☔' />
          <h1 className={css([styles.largeFont, styles.inlineBlock])}>
           Weather Report
          </h1>
          <Emoji label='peace' symbol='✌️' />
        </div>

        </header>
        <p className={css(styles.instructions)}>Enter the name of your city to get today's forecast.</p>
          <form onSubmit={this.submitForm}>
            <div className={css(styles.margin15)}>
              <input type='city'
                 placeholder='Kansas City'
                 value={this.state.city}
                 onChange={this.onChangeCity}
                 className={css(styles.input)}
              />
              <button type='submit' className={css([styles.button, styles.hover])}>
                Search
              </button>
            </div>
          </form>
          <Forecast weatherData={this.state.weatherData} city={this.state.city} />
      </div>
    );
  }
}

export default Weather;