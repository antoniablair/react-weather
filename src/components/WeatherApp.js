import React, { Component } from 'react';

import { css } from 'aphrodite';

import Emoji from './Emoji';
import Error from './Error';
import Forecast from './Forecast';

import { StyleSheet } from 'aphrodite';

import colors from '../common/colors';
import config from '../config';

import weatherData from '../weatherData';

export const styles = StyleSheet.create({
  weatherContainer: {
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
    width: '150px',
    height: '45px',
    border: '0px solid',
    fontSize: '14px',
  },
  formField: {
    width: '100%',
  },
  input: {
    fontSize: '14px',
    height: '46px',
    border: '0px solid',
    padding: '0px 0px 0px 10px',
    outline: 'none',
    width: '100px',
    ':focus': {
      outline: 'none',
    },
    '@media (min-width: 768px)': {
        width: '300px',
    }
  },
  title: {
    fontSize: '30px',
    '@media (min-width: 768px)': {
        fontSize: '38px',
    }
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

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      error: null,
      city: null,
      formText: 'Kansas City',
    };

    this.onChangeCity = this.onChangeCity.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(event) {
    event.preventDefault();

    const weatherApiKey = config.weatherApiKey;

    const urlBase = 'http://api.openweathermap.org/data/2.5/weather';
    const url = `${urlBase}?q=${this.state.formText}&appid=${weatherApiKey}&units=imperial`;

    // this.setState({
    //   weatherData,
    //   city: this.state.formText,
    // });

    const response = await fetch(url);

    if (response.status === 200) {
      const weatherData = await response.json();
      this.setState({
        weatherData,
        city: this.state.formText,
        error: null
      });
    } else {
      this.setState({
        error: response.statusText
      });
    }

    // fetch(url)
    //   .then(response => {
    //     if (response.status === 200) {
    //       response.json().then(weatherData => {
    //         this.setState({ weatherData, city: this.state.formText });
    //       });
    //     } else {
    //       this.setState({ error: response.statusText })
    //     }
    //   })
    //   .catch(error => this.setState({ error }));
  }

  onChangeCity(event) {
    this.setState({
      formText: event.target.value
    });
  }

  render() {
    return (
      <div className={css(styles.weatherContainer)}>
        <div className={css([styles.title, styles.inlineBlock])}>
          <Emoji label='umbrella' symbol='☔' />
          <h1 className={css([styles.title, styles.inlineBlock])}>
            Weather Report
          </h1>
          <Emoji label='peace' symbol='✌️' />
        </div>
        <div className={css(styles.margin15)}>
          <p className={css(styles.instructions)}>Enter the name of your city to get today's forecast.</p>
          <form onSubmit={this.submitForm}>
            <div>
              <input type='city'
                 placeholder='Kansas City'
                 value={this.state.formText}
                 onChange={this.onChangeCity}
                 className={css(styles.input)}
                 ref='nameInput'
              />
              <button type='submit' className={css([styles.button, styles.hover])}>
                Search
              </button>
            </div>
          </form>
        </div>
        { !this.state.error ? <Forecast weatherData={this.state.weatherData} city={this.state.city} /> : <Error text={this.state.error} /> }
      </div>
    );
  }
}

export default WeatherApp;