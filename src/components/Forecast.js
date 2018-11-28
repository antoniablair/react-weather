import React from 'react';

import { css, StyleSheet } from 'aphrodite';

import { getWeatherConditionImage } from '../utils/conditionImages';
import { joinArrayGrammatically, initialCasePhrase } from '../utils/textParsing';

import Card from './Card';

/**
 * Parses forecast results returned from weather API.
 **/

export const styles = StyleSheet.create({
  forecastContainer: {
    fontSize: '24px',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '450px',
  }
});

const parseForecastList = (weatherData) => {
  let forecasts = [];

  weatherData.forEach(forecast => {
    forecasts.push(forecast['description']);
  });

  return forecasts;
};

const createForecastSentence = (forecasts) => {
  const forecastString = joinArrayGrammatically(forecasts);

  return `The forecast today is: ${forecastString}.`;
};

const Forecast = ({ weatherData, city }) => {
  if (weatherData) {
    const forecasts = parseForecastList(weatherData['weather']);
    const forecastSentence = createForecastSentence(forecasts);
    const temp = weatherData.main.temp;
    const link = `https://openweathermap.org/find?q=${city.replace(' ', '+')}`;
    const image = getWeatherConditionImage(parseInt(weatherData.weather[0].id));

    return (
      <div className={css(styles.forecastContainer)}>
        <Card city={initialCasePhrase(city)}
              image={image}
              link={link}
              temp={temp}
              text={forecastSentence}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Forecast;
