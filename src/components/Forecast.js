import React from 'react';

import { css, StyleSheet } from 'aphrodite';

import { joinArrayGrammatically, initialCasePhrase } from '../utils/textParsing';

import Card from './Card';

/**
 * Displays forecast results returned from weather API.
 **/

export const styles = StyleSheet.create({
  forecastContainer: {
    fontSize: '24px',
    marginTop: '20px',
    display: 'flex',
  }
});

const parseForecastList = (data) => {
  const weatherData = data;
  let forecasts = [];

  weatherData.forEach(forecast => {
    forecasts.push(forecast['description']);
  });

  return forecasts;
};

const generateForecastPrediction = (data, locale) => {
  const forecasts = data;
  const city = locale;

  const forecastString = joinArrayGrammatically(forecasts);

  return `The forecast today for ${initialCasePhrase(city)} is: ${forecastString}.`;
};

const Forecast = (props) => {
  const { weatherData, city } = props;

  if (weatherData) {
    const forecasts = parseForecastList(weatherData['weather']);
    const forecastPrediction = generateForecastPrediction(forecasts, city);

    return (
      <div className={css(styles.forecastContainer)}>
        <Card text={forecastPrediction} />
      </div>
    );
  } else {
    return null;
  }
};

export default Forecast;
